const { distribute, distributeX, distributeY, distributeZ } = require('../distribute.js')

const jscad = require('@jscad/modeling');
const { cube } = jscad.primitives;
const { translate } = jscad.transforms;
const { union } = jscad.booleans;

"use strict"

const main = (params) => {

    // Creates 10 cubes with random positions and sizes
    let cubes = []
    for (let i = 1; i <= 10; i++)
        cubes.push(translate([Math.random() * 20, 0, 0], cube({ size: 0.2 + Math.random() * 2 })))

    // Distributes the cubes on the X axis to keep the same distance between them
    cubes = distribute(cubes, { gap: "x" })

    return union(cubes)
}

module.exports = { main }
