const { union, subtract } = require('@jscad/modeling/src/operations/booleans');
const { translate, rotateY } = require('@jscad/modeling/src/operations/transforms');
const { roundedCuboid, cube, cylinder } = require('@jscad/modeling/src/primitives');

const { align } = require('sph_jscad_utils/align.js')
const { distribute } = require('sph_jscad_utils/distribute.js')
const { split } = require('sph_jscad_utils/split.js')

const cable_holder = ({n = 1, height = 15, cyl = 5, wall = 1.5, ranhura = 3, ranhura_r = 15, base_wall = 3, largura = 30, outerGap = false} = {}) => {

	let tubo = subtract(
		cylinder({radius: cyl, height}),
		cylinder({radius: cyl - wall, height})
	)

	let ranh = subtract(
		cylinder({radius: ranhura_r, height}),
		cylinder({radius: ranhura_r - ranhura, height})
	)

	tubo = rotateY(Math.PI/2, tubo)
	tubo = subtract(tubo, translate([0, wall, 0], align(ranh, {ref: tubo, beginToCenter: 'z', center: 'x', begin: 'y'})))

	let base = split(roundedCuboid({size:[height, largura, base_wall * 2], roundRadius: 2}), {axis: 'z'})[1]
	base = translate([0, 0, wall], align(base, {ref: tubo, endToBegin: 'z'}))

	let tubos = []
    for (let i = 1; i <= n; i++)
		tubos.push(tubo)

    // Distributes the cubes on the X axis to keep the same distance between them
    tubos = distribute(tubos,  {gap: "y", rangeY: [-largura/2, largura/2], outerGap})

	return union(base, union(tubos))
}

const main = (params) => {

	return cable_holder({n : 2})
}   

module.exports = { main}    