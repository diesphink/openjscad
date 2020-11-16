const { subtract, union, intersect } = require('@jscad/modeling/src/operations/booleans');
const { cuboid, roundedCuboid, cube, cylinder } = require('@jscad/modeling/src/primitives');

const { align } = require('sph_jscad_utils/align.js')

const { dim_isopor, dim_base, dim_pin } = require('./escritorio_lateral.js')

const main = (params) => {
    "use strict"

    const base = cuboid({ size: dim_base })

    const isopor = align(cuboid({ size: dim_isopor }), { ref: base, center: 'xz', end: 'y' })

    const pin = align(cuboid({ size: dim_pin, }), { ref: base, center: 'xz', endToBegin: 'y' })

    return union(subtract(base, isopor), pin)
}

module.exports = { main }

