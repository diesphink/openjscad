const { subtract, union, intersect } = require('@jscad/modeling/src/operations/booleans');
const { translate, rotateX, rotateY, rotateZ, scale } = require('@jscad/modeling/src/operations/transforms');
const { cuboid, roundedCuboid, cube, cylinder } = require('@jscad/modeling/src/primitives');

const { align } = require('sph_jscad_utils/align.js')
const { screw, STYLE_CONE } = require('sph_jscad_utils/screw.js')
const { split } = require('sph_jscad_utils/split.js')

const main = (params) => {
  "use strict"

  const X = 0; const Y = 1; const Z = 2;

  const dim_con = [203, 181, 10]
  const dim_isopor = [200, 36, 200]
  const parede_interna = 5
  const dim_base = [210, dim_isopor[Y] + dim_con[Z] + parede_interna, 190]
  const dim_tubo = { r: 153 / 2, parede: 4, comprimento: dim_base[Y] - dim_con[Z] }

  let base = roundedCuboid({ size: dim_base, roundRadius: 2 })
  let conector = roundedCuboid({ size: dim_con })
  conector = subtract(conector,
    align(makeChamferer(Y, [10, 300, 10]), {ref: conector, center:'y', centerToBegin: 'x', centerToEnd: 'z'}),
    align(makeChamferer(Y, [10, 300, 10]), {ref: conector, center:'y', centerToEnd: 'xz'})
  )


  conector = rotateX(Math.PI / 2, conector)
  conector = align(conector, { ref: base, center: 'x', begin: 'y', end: 'z' })

  // conector = conector
  // .subtract(toolparts.makeChamferer(Y, [10, 300, 10]).align(conector, {center: [0, 1, 0], centerToBegin:[1, 0, 0], centerToEnd:[0, 0, 1]}))
  // .subtract(toolparts.makeChamferer(Y, [10, 300, 10]).align(conector, {center: [0, 1, 0], centerToBegin:[0, 0, 0], centerToEnd:[1, 0, 1]}))
  // .rotateX(90)
  // .align(base, {center:[1,0,0], begin:[0,1,0], end:[0,0,1]})

  const isopor = translate([0, parede_interna + dim_con[Z], 2], align(cuboid({ size: dim_isopor }), { ref: base, center: 'x', begin: 'z' }))

  const tubo_externo = align(rotateX(Math.PI / 2, cylinder({ height: dim_tubo.comprimento, radius: dim_tubo.r + dim_tubo.parede })), { ref: conector, beginToEnd: 'y', center: 'xz' })
  const tubo_interno = align(rotateX(Math.PI / 2, cylinder({ height: dim_tubo.comprimento, radius: dim_tubo.r })), { ref: tubo_externo, center: 'yxz' })

  base = subtract(union(subtract(base, conector, isopor), tubo_externo), tubo_interno)
  return rotateX(-Math.PI/2, base)
}

const makeChamferer = (axis, dimensions) => {
  const X = 0; const Y = 1; const Z = 2;
  var l = 2 / Math.sqrt(2)
  var chamferer = cube({ size: l })
  if (axis == X)
    chamferer = rotateX(Math.PI / 4, chamferer)
  else if (axis == Y)
    chamferer = rotateY(Math.PI / 4, chamferer)
  else if (axis == Z)
    chamferer = rotateZ(Math.PI / 4, chamferer)
  chamferer = scale(dimensions, chamferer)
  return chamferer
}


module.exports = { main }

