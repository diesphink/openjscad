const { subtract, union } = require('@jscad/modeling/src/operations/booleans');
const { translate, rotateX } = require('@jscad/modeling/src/operations/transforms');
const { cuboid, roundedCuboid } = require('@jscad/modeling/src/primitives');

const { align } = require('sph_jscad_utils/align.js')
const { screw, STYLE_CONE } = require('sph_jscad_utils/screw.js')
const { split } = require('sph_jscad_utils/split.js')

const main = (params) => {
    "use strict"

    const dimExterno = [200, 40, 50]
    const dimRanhura = [150, 20, 70]
    const dimMesa1 = [23, 22, 50] // fundo
    const dimMesa2 = [17, 30, 50] // tampa
    const radiusExterno = 3
    const radiusRanhura = 5

    dimRanhura[0] = dimRanhura[0] + radiusRanhura * 2

    let suporte = roundedCuboid({ size: dimExterno, roundRadius: radiusExterno })

    let ranhura = roundedCuboid({ size: dimRanhura, roundRadius: 5 })
    ranhura = translate([radiusRanhura * 2, 0, 0], align(ranhura, { ref: suporte, center: 'yz', end: 'x' }))

    let mesa1 = cuboid({ size: dimMesa1 }) 
    let mesa2 = cuboid({ size: dimMesa2 }) 
    mesa2 = align(mesa2, { ref: mesa1, beginToEnd: 'x', end: 'y' })

    let screw1 = rotateX(Math.PI / 2, screw(4, 30, { head_length: 3.5, head_diameter: 8, head_style: STYLE_CONE }))
    screw1 = translate([0, -10, 10], align(screw1, {ref: mesa2, center: 'x', begin: 'yz'}))

    let screw2 = translate([0, 0, -10], align(screw1, {ref: mesa2, end: 'z'}))
    
    let mesa = union(mesa1, mesa2, screw1, screw2)

    mesa = align(mesa, { ref: suporte, begin: 'x', end: 'y' })

    return subtract(suporte, mesa, ranhura)

    // return split(split(subtract(suporte, mesa, ranhura), {axis: 'z', at: 20})[0], {axis: 'x', at: [23, 40]})[1]
}

module.exports = { main } 