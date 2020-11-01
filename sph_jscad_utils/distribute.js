/*

(c) 2020 diesphink
This code is licensed under MIT license (see LICENSE for details)

Function distribute

  Distribute in the specifide mode the objects on an axis, returning the
  repositionated objects.

  The objects can be distributed in the following modes:

    begin:      Distribute the objects making their beginnings equidistant
    center:     Distribute the objects making their centers equidistant
    end:        Distribute the objects making their endings equidistant
    gap:        Distribute the objects making the distance between the objects
                equidistant

  On each parameter of mode above, it can receive any combination of axes (x, 
  y or z)

  For the distribution, the objects will use the minimum and maximum value on
  the specified axis. To specify one specific range for the distribution, use
  the range parameter for the correct axis (rangeX, rangeY or rangeZ).

  When the ditribution is using the gap mode, it's possible to add a gap on the
  beginning and end of the distribution with the parameter outerGap. If passed
  true, it will add a space before and after the objects with the same distance
  as the inner gaps. If a numeric value is passed, it will add that specific gap
  before and after the objects.

Parameter
  objs:       Array of objects to be distributed
  begin:      Axes to distribute the object's begin 
  center:     Axes to distribute the object's center
  end:        Axes to distribute the object's end
  gap:        Axes to distribute the distance between the objects
  rangeX:     Array with [min, max] to use on the X axis distribution
  rangeY:     Array with [min, max] to use on the Y axis distribution
  rangeZ:     Array with [min, max] to use on the Z axis distribution
  outerGap:   Only when using gap, indicates if should add a gap before and after
              the objects. If passed true, will add a gap with the same size as
              the inner gaps, if a number is passed, will add a gap with that
              size

Retorns:
  New object array with the repositionated objects

Example:

    // Creates 10 cubes with random positions and sizes
    let cubes = [] 
    for (let i = 1; i <= 10; i++)
        cubes.push(translate([Math.random() * 20, 0, 0],cube({ size: 0.2 + Math.random() * 2 })))

    // Distributes the cubes on the X axis to keep the same distance between them
    cubes = distribute(cubes,  {gap: "x"})

*/

const jscad = require("@jscad/modeling")
const { measureBoundingBox } = jscad.measurements
const { translate } = jscad.transforms

"use strict"

const BEGIN = 0;
const CENTER = 1;
const END = 2;
const GAP = 3;

const distribute = (objs, { ref = null,
    begin = "", center = "", end = "", gap = "",
    rangeX = null, rangeY = null, rangeZ = null,
    outerGap = false } = {}) => {

    if (objs == null || !(Array.isArray(objs)))
        throw new TypeError("objs must be an array of openjscad objects")

    const ret = []

    const axes = ["x", "y", "z"]
    axes.forEach((axisName, axis) => {

        const mode = begin.includes(axisName) ? BEGIN :
            center.includes(axisName) ? CENTER :
                end.includes(axisName) ? END :
                    gap.includes(axisName) ? GAP : null

        if (mode == null)
            return

        // Ordena os objetos no array com base na ordem no eixo indicado
        objs = objs.sort((o1, o2) => measureBoundingBox(o1)[0][axis] - measureBoundingBox(o2)[0][axis])

        // Coleta cada uma das métricas relevantes
        const metrics = objs.map(o => {
            const bounds = measureBoundingBox(o)
            const ret = []
            ret[BEGIN] = bounds[0][axis]
            ret[CENTER] = (bounds[1][axis] + bounds[0][axis]) / 2
            ret[END] = bounds[1][axis]
            ret[GAP] = bounds[1][axis] - bounds[0][axis]
            return ret
        })

        // ranges possui os min/max dentro do eixo
        // é uma matriz bidimensional com o primeiro índice indicando 0: mins, 1: maxes
        // e o segundo índice indicando os valores min/max para cada modo de distribute
        let ranges = null

        if ((axisName == 'x' && rangeX != null)
            || (axisName == 'y' && rangeY != null)
            || (axisName == 'z' && rangeZ != null)) {

            // Se recebi um range no eixo, uso ele
            ranges = [[], []]
            for (let distmode = BEGIN; distmode <= GAP; distmode++) {
                ranges[0][distmode] = axisName == 'x' ? rangeX[0] : axisName == 'y' ? rangeY[0] : rangeZ[0]
                ranges[1][distmode] = axisName == 'x' ? rangeX[1] : axisName == 'y' ? rangeY[1] : rangeZ[1]
            }
        } else {
            // Se não tem um range, olha todos os objetos procurando os min/max no eixo
            ranges = metrics.reduce(function (range, m) {
                for (var distmode = BEGIN; distmode <= GAP; distmode++) {
                    if (range[0][distmode] == null || m[distmode] < range[0][distmode])
                        range[0][distmode] = m[distmode]
                    if (range[1][distmode] == null || m[distmode] > range[1][distmode])
                        range[1][distmode] = m[distmode]
                }
                return range
            }, [[], []])
        }

        if (mode == GAP) {
            // Move os objetos considerando apenas o espaço entre eles
            const total_range = ranges[1][END] - ranges[0][BEGIN]
            const total_size = metrics.reduce((total_size, m) => total_size += m[GAP], 0)

            let space_between
            if (typeof outerGap == 'number') {
                space_between = (total_range - total_size - 2 * outerGap) / (objs.length - 1)
            } else if (outerGap)
                space_between = (total_range - total_size) / (objs.length + 1)
            else
                space_between = (total_range - total_size) / (objs.length - 1)

            let acc = ranges[0][BEGIN];
            if (typeof outerGap == 'number')
                acc += outerGap;
            else if (outerGap)
                acc += space_between;
            for (let i = 0; i < objs.length; i++) {
                const translation = [0, 0, 0]
                translation[axis] = acc - metrics[i][BEGIN]
                acc += metrics[i][GAP] += space_between
                ret[i] = translate(translation, objs[i])
            }
        } else {
            // Move os objetos para o método simples (begin, center, end)
            const space_between = (ranges[1][mode] - ranges[0][mode]) / (objs.length - 1)
            for (let i = 0; i < objs.length; i++) {
                const translation = [0, 0, 0]
                translation[axis] = ranges[0][mode] + (i * space_between) - metrics[i][mode]
                ret[i] = translate(translation, objs[i])
            }
        }

        objs = ret
    })

    return objs

}

const distributeX = (objs, { outerGap, rangeX } = {}) => { return distribute(objs, { gap: "x", outerGap, rangeX }) }
const distributeY = (objs, { outerGap, rangeY } = {}) => { return distribute(objs, { gap: "y", outerGap, rangeY }) }
const distributeZ = (objs, { outerGap, rangeZ } = {}) => { return distribute(objs, { gap: "z", outerGap, rangeZ }) }

module.exports = { distribute, distributeX, distributeY, distributeZ }
