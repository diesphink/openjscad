const { union, subtract } = require('@jscad/modeling/src/operations/booleans');
const { hull } = require('@jscad/modeling/src/operations/hulls');
const { extrudeLinear } = require('@jscad/modeling/src/operations/extrusions');
const { translate, rotateX, rotateY, rotateZ } = require('@jscad/modeling/src/operations/transforms');
const { roundedCuboid, circle, cuboid, polygon, polyhedron, cylinder } = require('@jscad/modeling/src/primitives');
const { measureBoundingBox } = require('@jscad/modeling/src/measurements');

const { align } = require('sph_jscad_utils/align.js')
const { split } = require('sph_jscad_utils/split.js')


const main = (params) => {

    const dim = [30, 13, 35]
    const dim_suportes = 3 
    const r_parafusos = 1.5
    const espaco_parafusos_madeira = 11
    const X = 0; const Y = 1; const Z = 2;

    // Estrutura principal
    const horizontal = cuboid({size: [dim[X], dim[Y], dim_suportes]})

    const vertical = align(cuboid({size: [dim[X], dim_suportes, dim[Z]]}), {ref: horizontal, end: 'y', begin: 'z'})
    let lateral = extrudeLinear({height: dim_suportes}, polygon({ points: [[0, 0], [dim[Y] - dim_suportes, 0], [0, dim[Z] - dim_suportes]] }))
    lateral = rotateZ(-Math.PI/2, rotateX(Math.PI/2, lateral))
    lateral1 = align(lateral, {ref: vertical, begin: 'x', end: 'z', endToBegin: 'y'})
    lateral2 = align(lateral, {ref: vertical, end: 'zx', endToBegin: 'y'})

    // parafusos pra madeira
    const buraco_parafuso = cylinder({height: dim_suportes + 1, radius: r_parafusos} )
    let parafusos_madeira = union(buraco_parafuso, translate([espaco_parafusos_madeira + 2 * r_parafusos, 0, 0], buraco_parafuso))
    parafusos_madeira = translate([0, -dim_suportes/2,0], align(parafusos_madeira, {ref: horizontal, center: 'xyz'}))

    // Ranhura trilhos
    const ranhura = roundedCuboid({size:[2*r_parafusos, dim_suportes * 10, dim[Z] - 3*dim_suportes], roundRadius: r_parafusos -0.1})
    let ranhuras = union(ranhura, translate([espaco_parafusos_madeira + 2 * r_parafusos, 0, 0], ranhura))
    ranhuras = translate([0, 0, dim_suportes/2], align(ranhuras, {ref: vertical, center: 'xyz'}))

    let base = subtract(union(vertical, horizontal, lateral1, lateral2), parafusos_madeira, ranhuras)
    base = rotateY(Math.PI/2, base)
        
    return base

} 

module.exports = { main }   

 