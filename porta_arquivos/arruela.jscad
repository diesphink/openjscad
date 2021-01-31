const { union, subtract } = require('@jscad/modeling/src/operations/booleans');
const { hull } = require('@jscad/modeling/src/operations/hulls');
const { extrudeLinear } = require('@jscad/modeling/src/operations/extrusions');
const { translate, rotateX, rotateY, rotateZ } = require('@jscad/modeling/src/operations/transforms');
const { roundedCuboid, circle, cuboid, polygon, polyhedron, cylinder } = require('@jscad/modeling/src/primitives');
const { measureBoundingBox } = require('@jscad/modeling/src/measurements');

const { align } = require('sph_jscad_utils/align.js')
const { split } = require('sph_jscad_utils/split.js')


const main = (params) => {

    const arruela = subtract(
        cylinder({height: 2, radius: 8, segments: 120}),
        cylinder({height: 4, radius: 2, segments: 62})
    )
    
    arruelas = []
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 3; j++)
        arruelas.push(translate([i * 20, j * 20, 0], arruela))
    }

    return arruelas

} 

module.exports = { main }   

 