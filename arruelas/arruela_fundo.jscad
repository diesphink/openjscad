const { union, subtract } = require('@jscad/modeling/src/operations/booleans');
const { translate } = require('@jscad/modeling/src/operations/transforms');
const { cylinder } = require('@jscad/modeling/src/primitives');
const { distribute } = require('sph_jscad_utils/distribute.js');

const r1 = 1.5
const r2 = 6
const z = 1


const main = (params) => {

	const arruela = subtract(
		cylinder({ height: z, radius: r2 }),
		cylinder({ height: z, radius: r1 })
	)

	let arruelasX = []
    for (let i = 1; i <= 4; i++)
		arruelasX.push(arruela)
	arruelasX = distribute(arruelasX,  {gap: "x", rangeX: [0, 80]})


	let arruelasY = []
    for (let i = 1; i <= 4; i++)
		arruelasY.push(union(arruelasX))
    arruelasY = distribute(arruelasY,  {gap: "y", rangeY: [0, 80]})

	return union(arruelasY)
} 

module.exports = { main}