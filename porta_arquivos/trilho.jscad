const { union, subtract } = require('@jscad/modeling/src/operations/booleans');
const { hull } = require('@jscad/modeling/src/operations/hulls');
const { extrudeLinear } = require('@jscad/modeling/src/operations/extrusions');
const { translate, rotateX, rotateY } = require('@jscad/modeling/src/operations/transforms');
const { roundedCuboid, circle } = require('@jscad/modeling/src/primitives');
const { measureBoundingBox } = require('@jscad/modeling/src/measurements');

const { align } = require('sph_jscad_utils/align.js')
const { split } = require('sph_jscad_utils/split.js')


const trilho = (params) => {

    // Trilho
    const base = roundedCuboid({size: [300, 17, 15], segments: 16})
    const espaco_ganchos = translate([0, 0, 5], align(roundedCuboid({size: [296, 9, 50], roundRadius: 2, segments: 16}),
        {
            ref: base,
            begin:'z',
            center: 'x'
        }
    ))

    // Buracos de parafusos
    m_menor = 2
    m_maior = 3

    var parafuso_circular = extrudeLinear({height: 25}, circle({radius: m_menor}))
    parafuso_circular = rotateX(Math.PI/2, parafuso_circular)
    
    var parafuso_maior_1 = extrudeLinear({height: 25}, hull(circle({radius: m_menor}), translate([0, 2, 0], circle({radius: m_menor}))))
    parafuso_maior_1 = translate([-5, 0, 0], align(rotateX(Math.PI/2, parafuso_maior_1), {ref: parafuso_circular, center: 'z', endToBegin: 'x'}))

    var parafuso_maior_2 = translate([-10.6, 0, 0], align(rotateY(Math.PI/2, parafuso_maior_1), {ref: parafuso_maior_1, center: 'z', endToBegin: 'x'}))

    const grupo_parafusos = union( parafuso_circular, parafuso_maior_1, parafuso_maior_2)
    const gp1 = translate([30, 0, -2], align(grupo_parafusos, {ref: base, begin: 'x', end: 'zy'}))
    const gp2 = translate([65, 0, 0], align(grupo_parafusos, {ref: gp1, beginToEnd:'x', end: 'zy'}))
    const gp3 = translate([97, 0, 0], align(grupo_parafusos, {ref: gp2, beginToEnd:'x', end: 'zy'}))

    return split(subtract(base, espaco_ganchos, gp1, gp2, gp3), {axis: 'x', at: 149})
} 

const main = (params) => {
    return union(
        rotateY(-Math.PI/2, trilho()[0]),
        translate([20, 0, 0], rotateY(Math.PI/2, trilho()[1]))
    )
}

module.exports = { trilho, main }   

 