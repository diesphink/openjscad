const { split } = require('../split.js')

const jscad = require('@jscad/modeling');
const { cylinder } = jscad.primitives;
const { translate } = jscad.transforms;
const { union } = jscad.booleans;


const main = (params) => {
    "use strict"

    const cyl = cylinder({ radius: 3, height: 2 })
    const objs = split(cyl, { axis: 'x', at: [4, 3] })
    objs[0] = translate([-1, 0, 0], objs[0])
    objs[2] = translate([1, 0, 0], objs[2])
    return union(objs)
}

module.exports = { main }
