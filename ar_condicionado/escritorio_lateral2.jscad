const { subtract, union, intersect } = require('@jscad/modeling/src/operations/booleans');
const { cuboid, roundedCuboid, cube, cylinder } = require('@jscad/modeling/src/primitives');

const { align } = require('sph_jscad_utils/align.js')

const { dim, dim_isopor, dim_base, dim_slot } = require('./escritorio_lateral.js')

const main = (params) => {
    "use strict"


    dim_base[1] = dim_isopor[1] + dim_slot[1] + dim.parede

    const base = cuboid({ size: dim_base })

    const isopor = align(cuboid({ size: dim_isopor }), { ref: base, center: 'xz', end: 'y' })

    const slot = align(cuboid({ size: dim_slot, }), { ref: base, center: 'xz', begin: 'y' })

    return subtract(base, isopor, slot)
}

module.exports = { main }

