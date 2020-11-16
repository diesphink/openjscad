const { subtract, union, intersect } = require('@jscad/modeling/src/operations/booleans');
const { translate, rotateX } = require('@jscad/modeling/src/operations/transforms');
const { cuboid, roundedCuboid } = require('@jscad/modeling/src/primitives');

const { align } = require('sph_jscad_utils/align.js')
const { screw, STYLE_CONE } = require('sph_jscad_utils/screw.js')
const { split } = require('sph_jscad_utils/split.js')

const main = (params) => {
  "use strict"

  const X = 0; const Y = 1; const Z = 2;

  const dim_base = [150, 140, 6]
  const dim_degrau1 = [150, 24, 15]
  const dim_degrau2 = [150, 10, 13]
  const radius = 3
  const fn = 16

  dim_base[Z] += radius
  dim_degrau1[Z] += radius * 2
  dim_degrau2[Z] += radius * 2

  let base = roundedCuboid({ size: dim_base, roundRadius: radius })
  const degrau1 = roundedCuboid({ size: dim_degrau1, roundRadius: radius })
  const degrau2 = roundedCuboid({ size: dim_degrau2, roundRadius: radius })

  base = union(base, translate([0, 0, -radius * 2], align(degrau1, { ref: base, begin: 'xy', beginToEnd: 'z' })))
  base = union(base, translate([0, 0, -radius * 2], align(degrau2, { ref: base, begin: 'xy', beginToEnd: 'z' })))

  base = split(base, {axis: 'z', at: radius})[1]

  return split(split(base, {axis: 'x', at: [3, 6]})[1], {axis: 'y', at: 40})[0]
  // return base
}

module.exports = { main }