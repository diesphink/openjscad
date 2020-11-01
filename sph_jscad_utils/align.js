/*

(c) 2020 diesphink
This code is licensed under MIT license (see LICENSE for details)

Function align

  Aligns un object (obj) considering a reference (ref) on begin/center/end,
  returning the traslated object.

  There are nine possible alignment options, based on which part of the object
  will be used for calculations (begin, center or end), for each object (obj or
  reference):

  +-------------------+-----------------+-----------------+--------------+
  |                   |                 Anchor on reference              |
  | Anchor on object  | begin             center            end          |
  +-------------------+-----------------+-----------------+--------------+
  | begin             | begin           | beginToCenter   | beginToEnd   |
  | center            | centerToBegin   | center          | centerToEnd  |  
  | end               | endToBegin      | endToCenter     | end          |
  +-------------------+-----------------+-----------------+--------------+

  For the alignment, begin means the minimum value of this object on the axis,
  end means the maximum value of this object on the axis, and center means the
  mean value in the axis ((min+max)/2).
  
  On each of these 9 options, any of the 3 (x, y, z) axes can be passed, as
  string. You may pass any number of axes/alignment options. E.g. to center the
  obj to the reference in all axes, you may call:
    align(obj, {ref, center: "xyz"})

  Ref may be an object (in this case, the reference will be the bounding box
  around the object) or an array of coordinates ([x, y, z]). If no ref is
  passed, the origin is used ([0, 0, 0]).

Parameters

  obj:            Object to be aligned/translated
  ref:            Reference object or reference array ([x, y, z]). If 
                  omitted, will use origins: ([0, 0, 0])
  begin:          Axes to align the object's begin to the reference begin
  beginToCenter:  Axes to align the object's begin to the reference center
  beginToEnd:     Axes to align the object's begin to the reference end
  centerToBegin:  Axes to align the object's center to the reference begin
  center:         Axes to align the object's center to the reference center
  centerToEnd:    Axes to align the object's center to the reference end
  endToBegin:     Axes to align the object's end to the reference begin
  endToCenter:    Axes to align the object's end to the reference center
  end:            Axes to align the object's end to the reference end

Retorns
  obj translated according to the parameters

Example:

    // Creates a translated cube
    const cube1 = translate([4, 2, 9], cube({ size: 2 }))

    // Creates a cube directly above (z axis) the first cube,
    // centered on the x and y axes
    const cube2 = align(cube({ size: 1 }), {
        ref: cube1,
        center: "xy",
        beginToEnd: "z"
    })

*/

const jscad = require("@jscad/modeling")
const { measureBoundingBox } = jscad.measurements
const { translate } = jscad.transforms

"use strict"

const align = (obj, { ref = null,
    begin = "", center = "", end = "",
    beginToCenter = "", beginToEnd = "",
    centerToBegin = "", centerToEnd = "",
    endToBegin = "", endToCenter = "" } = {}) => {

    if (obj == null || obj.polygons == null)
        throw new TypeError("obj must be an openjscad object")

    begin = begin.toLowerCase()
    center = center.toLowerCase()
    end = end.toLowerCase()
    beginToCenter = beginToCenter.toLowerCase()
    beginToEnd = beginToEnd.toLowerCase()
    centerToBegin = centerToBegin.toLowerCase()
    centerToEnd = centerToEnd.toLowerCase()
    endToBegin = endToBegin.toLowerCase()
    endToCenter = endToCenter.toLowerCase()

    const ob = measureBoundingBox(obj)

    let rb = null
    if (ref == null)
        rb = [{ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }]
    else if (Array.isArray(ref))
        rb = [{ x: ref[0], y: ref[1], z: ref[2] }, { x: ref[0], y: ref[1], z: ref[2] }]
    else
        rb = measureBoundingBox(ref)

    const bRef = rb[0]
    const bObj = ob[0]
    const cRef = [(rb[0][0] + rb[1][0]) / 2, (rb[0][1] + rb[1][1]) / 2, (rb[0][2] + rb[1][2]) / 2]
    const cObj = [(ob[0][0] + ob[1][0]) / 2, (ob[0][1] + ob[1][1]) / 2, (ob[0][2] + ob[1][2]) / 2]
    const eRef = rb[1]
    const eObj = ob[1]
    const deltas = [0, 0, 0]

    const axes = ["x", "y", "z"]
    axes.forEach((axis, i) => {
        let from = null
        let to = null
        if (begin.includes(axis) || beginToCenter.includes(axis) || beginToEnd.includes(axis))
            from = bObj[i]
        if (centerToBegin.includes(axis) || center.includes(axis) || centerToEnd.includes(axis))
            from = cObj[i]
        if (endToBegin.includes(axis) || endToCenter.includes(axis) || end.includes(axis))
            from = eObj[i]

        if (begin.includes(axis) || centerToBegin.includes(axis) || endToBegin.includes(axis))
            to = bRef[i]
        if (beginToCenter.includes(axis) || center.includes(axis) || endToCenter.includes(axis))
            to = cRef[i]
        if (beginToEnd.includes(axis) || centerToEnd.includes(axis) || end.includes(axis))
            to = eRef[i]

        if (from != null && to != null)
            deltas[i] = to - from
    })

    return translate(deltas, obj)
}

module.exports = { align }