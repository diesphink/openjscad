const { union, subtract } = require('@jscad/modeling/src/operations/booleans');
const { translate } = require('@jscad/modeling/src/operations/transforms');
const { roundedCuboid, cuboid } = require('@jscad/modeling/src/primitives');
const { split } = require('sph_jscad_utils/split.js');
const { align } = require('sph_jscad_utils/align.js');

const tile = [210, 210, 3]
const gaveta = [210, 215, 3]
const folga = [3, 3, 3]
const quadrado = [25, 25, 3]
const roundRadius = 2

const x = 0, y = 1, z = 2

const mgaveta = (qtd_tiles) => {

	let z_interno = tile[z] * qtd_tiles + folga[z]

	g = roundedCuboid({size: [gaveta[x], gaveta[y], gaveta[z] + z_interno + roundRadius], roundRadius, segments: 16})
	g = split(g, { axis: 'z', at: gaveta[z] + z_interno })[0]

	g = subtract(g, align(cuboid({size: [tile[x], tile[y], z_interno]}), {ref: g, center: 'y', end:'yz'}))
	g = union(g, align(tile_holder(8, 8, 8), {ref: g, center: 'xyz'}))

	return g
}

tile_holder = (qx, qy, qz) => {
	const parede = 4
	const espaco = 7
	tiles = cuboid({size: [quadrado[x] * qx, quadrado[y] * qy, qz * quadrado[z] + folga[z] + gaveta[z]]})
	let espacamento_x = cuboid({size: [
		2 * quadrado[x] * qx, 
		quadrado[y] * qy - 2 * espaco, 
		qz * quadrado[z] + folga[z] + gaveta[z]
		]})
	let espacamento_y = cuboid({size: [
		quadrado[x] * qx - 2 * espaco, 
		2 * quadrado[y] * qy, 
		qz * quadrado[z] + folga[z] + gaveta[z]
		]})
	holder = cuboid({size: [quadrado[x] * qx + 2 * parede, quadrado[y] * qy + 2 * parede, qz * quadrado[z] + folga[z] + gaveta[z]]})
	holder = subtract(holder, 
		align(tiles, {ref: holder, center: 'xy', begin: 'z'}),
		align(espacamento_x, {ref: holder, center: 'xy', begin: 'z'}),
		align(espacamento_y, {ref: holder, center: 'xy', begin: 'z'})
		)
	return holder
}
 
const main = (params) => {

	return mgaveta(8)
} 

module.exports = { main} 