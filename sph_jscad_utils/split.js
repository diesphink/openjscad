/*

(c) 2020 diesphink
This code is licensed under MIT license (see LICENSE for details)

Function split

  Cut the object (obj) on the indicated positions (at) on an determined axis, 
  returning a object matrix with each slice.

  The possible values for the axis are 'x', 'y' and 'z'.

  The possible values for the at, to indicate where to cut, are:

    null:   Indicates a split in half
    number: Indicates position on the axis to cut, with regards to the object
    array:  Indicates various positions to cut, with positions on the axis as
            with previous option

Parameters
  obj:    Object to be splitted
  axis:   Axis on which to split ('x', 'y' or 'z')
  at:     Position on the axis to split, can be a number, or an array. If not
          informed, the object will be split in half.

Retorns
  matrix with each piece of the splitted object

Example

  // Creates a cylinder
  const cyl = cylinder({ radius: 3, height: 4 })

  // Split the cylinder into 3 pieces and translates the pieces for visualization
  const objs = split(cyl, { axis: 'x', at: [2, 4] })
  objs[0] = translate([-1, 0, 0], objs[0])
  objs[2] = translate([1, 0, 0], objs[2])

*/

const jscad = require("@jscad/modeling")
const { align } = require("./align.js")
const { cuboid } = jscad.primitives;
const { intersect, subtract } = jscad.booleans;
const { measureBoundingBox } = jscad.measurements

"use strict"

const split = (obj, { axis = null, at = null } = {}) => {

  if (axis != 'x' && axis != 'y' && axis != 'z')
    throw new TypeError("axis must be 'x', 'y' or 'z'")

  if (obj == null || obj.polygons == null)
    throw new TypeError("obj must be an openjscad object")

  const index = axis == 'x' ? 0 : axis == 'y' ? 1 : 2

  const ob = measureBoundingBox(obj)
  const cube_size = [ob[1][0] - ob[0][0], ob[1][1] - ob[0][1], ob[1][2] - ob[0][2]]

  // Não informado, usa metade da dimensão
  if (at == null)
    cube_size[index] = cube_size[index] / 2

  // Array com valores, usa o último e segue em loop nos outros
  // Está utilizando o último para não precisar ajustar as medidas de corte
  else if (Array.isArray(at)) {
    at = at.sort(function(a, b) {
      return a - b;
    });
    cube_size[index] = at.pop()
    // Valor direto
  } else
    cube_size[index] = at

  const splitter = align(cuboid({ size: cube_size }), { ref: obj, begin: "xyz" })

  if (Array.isArray(at) && at.length >= 1) {
    return split(intersect(obj, splitter), { axis, at }).concat([subtract(obj, splitter)])
  } else
    return [intersect(obj, splitter), subtract(obj, splitter)]
}

module.exports = { split }    