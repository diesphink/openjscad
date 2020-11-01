const align = require('../align.js').align

const jscad = require('@jscad/modeling');
const { cube, } = jscad.primitives;
const { translate } = jscad.transforms;
const { union } = jscad.booleans;

"use strict"

const main = (params) => {

    // Creates a translated cube
    const cube1 = translate([4, 2, 9], cube({ size: 2 }))

    // Creates a cube directly above (z axis) the first cube,
    // centered on the x and y axes
    const cube2 = align(cube({ size: 1 }), {
        ref: cube1,
        center: "xy",
        beginToEnd: "z"
    })

    return union(cube1, cube2)

}

module.exports = { main }   
 