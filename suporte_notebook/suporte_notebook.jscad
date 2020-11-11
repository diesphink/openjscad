const { subtract, union } = require('@jscad/modeling/src/operations/booleans');
const { translate } = require('@jscad/modeling/src/operations/transforms');
const { cuboid, roundedCuboid } = require('@jscad/modeling/src/primitives');

const { align } = require('sph_jscad_utils/align.js')

const main = (params) => {
    "use strict"

    const dimExterno = [200, 40, 50]
    const dimRanhura = [150, 20, 70]
    const dimMesa1 = [13, 25, 50]
    const dimMesa2 = [17, 30, 50]
    const radiusExterno = 3
    const radiusRanhura = 5

    dimRanhura[0] = dimRanhura[0] + radiusRanhura * 2

    let suporte = roundedCuboid({ size: dimExterno, roundRadius: radiusExterno })

    let ranhura = roundedCuboid({ size: dimRanhura, roundRadius: 5 })
    ranhura = translate([radiusRanhura * 2, 0, 0], align(ranhura, { ref: suporte, center: 'yz', end: 'x' }))

    let mesa1 = cuboid({ size: dimMesa1 })
    let mesa2 = cuboid({ size: dimMesa2 })
    let mesa = union(mesa1, align(mesa2, { ref: mesa1, beginToEnd: 'x', end: 'y' }))

    mesa = align(mesa, { ref: suporte, begin: 'x', end: 'y' })

    return subtract(suporte, mesa, ranhura)
}

module.exports = { main } 