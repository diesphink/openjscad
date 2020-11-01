const { split } = require('../split.js')

const jscad = require('@jscad/modeling');
const { cylinder } = jscad.primitives;
const { translate } = jscad.transforms;
const { union } = jscad.booleans;

"use strict"

const main = (params) => {

    objs = split(cylinder({radius: 3, height: 4}), {axis: 'x', at: [2, 4]})
    objs[1] = translate([0, 1, 2], objs[1])

    return union(objs) 
}

module.exports = { main }
