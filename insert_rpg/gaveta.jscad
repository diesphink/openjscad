const { union, subtract } = require('@jscad/modeling/src/operations/booleans');
const { translate } = require('@jscad/modeling/src/operations/transforms');
const { roundedCuboid, cuboid } = require('@jscad/modeling/src/primitives');
const { split } = require('sph_jscad_utils/split.js');
const { align } = require('sph_jscad_utils/align.js');

const tile = [210, 210, 3]
const gaveta = [216, 216, 3]
const folga = [3, 3, 3]
const roundRadius = 2

const x = 0, y = 1, z = 2

const mgaveta = (qtd_tiles) => {

	let z_interno = tile[z] * qtd_tiles + folga[z]

	g = roundedCuboid({size: [gaveta[x], gaveta[y], gaveta[z] + z_interno + roundRadius], roundRadius, segments: 16})
	g = split(g, { axis: 'z', at: gaveta[z] + z_interno })[0]

	g = subtract(g, align(cuboid({size: [tile[x], tile[y], z_interno]}), {ref: g, center: 'xy', end:'z'}))

	return g
}

const main = (params) => {

	return mgaveta(8)
} 

module.exports = { main} 