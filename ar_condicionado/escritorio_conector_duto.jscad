const { subtract, union, intersect } = require('@jscad/modeling/src/operations/booleans');
const { translate, rotateX, rotateY, rotateZ, scale } = require('@jscad/modeling/src/operations/transforms');
const { rectangle, circle, cuboid, roundedCuboid, cube, cylinder } = require('@jscad/modeling/src/primitives');
const { hull } = require('@jscad/modeling').hulls;

const { align } = require('sph_jscad_utils/align.js')
const { screw, STYLE_CONE } = require('sph_jscad_utils/screw.js')
const { split } = require('sph_jscad_utils/split.js')

const main = (params) => {
  "use strict"

  const dim_conector = { x1: 160 + 1, x2: 150 + 1, y: 150, z: 5 + 0.5 } // As somas são os valores de folga
  const dim_base = [200, 160, 7]
  const dim_tubo = { height: dim_base[2], radius: 150 / 2 }


  let base = cuboid({ size: dim_base })

  const conector = hull(
    cuboid({ size: [dim_conector.x1, dim_conector.y, 0.001] }),
    translate([0, 0, dim_conector.z], cuboid({ size: [dim_conector.x2, dim_conector.y, 0.001] })))

  const parafuso = screw(6, 50, { head_length: 5, head_diameter: 12 })

  base = subtract(
    base,
    align(conector, { ref: base, center: 'yx', end: 'yz' }),
    translate([0, 0, 0], align(cylinder(dim_tubo), { ref: base, end: 'y', center: 'xz' })),
    translate([12.5, 12.5, 0], align(parafuso, { ref: base, centerToBegin: 'xy', centerToEnd: '', end: 'z' })),
    translate([12.5, -12.5, 0], align(parafuso, { ref: base, centerToBegin: 'x', centerToEnd: 'y', end: 'z' })),
    translate([-12.5, 12.5, 0], align(parafuso, { ref: base, centerToBegin: 'y', centerToEnd: 'x', end: 'z' })),
    translate([-12.5, -12.5, 0], align(parafuso, { ref: base, centerToBegin: '', centerToEnd: 'xy', end: 'z' })),
  )

  return base

  // return split(split(base, {axis: 'y', at: [20]})[0], {axis: 'x', at: 25})[0]
}


module.exports = { main }

