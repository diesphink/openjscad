const { union } = require('@jscad/modeling/src/operations/booleans');
const { translate } = require('@jscad/modeling/src/operations/transforms');
const { roundedCuboid } = require('@jscad/modeling/src/primitives');

const medidas = 11


const main = (params) => {
	return union(
		roundedCuboid({size: [medidas * 3, medidas, medidas], roundRadius: 1, segments: 16}),
		translate([0, medidas/2, 0], roundedCuboid({size: [medidas, medidas * 2, medidas], roundRadius: 1, segments: 16}))
	)
} 

module.exports = { main}   