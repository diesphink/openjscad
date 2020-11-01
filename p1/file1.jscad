const jscad = require('@jscad/modeling');
const { booleans, primitives } = jscad
const { cuboid, sphere } = primitives;

const main = (params) => {
	console.log("teste")
	return cuboid({size: [7, 0.5, 3]})  
} 

const teste = () => { 
	return cube()
}


module.exports = { main, teste} 