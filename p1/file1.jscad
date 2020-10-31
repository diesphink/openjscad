const jscad = require('@jscad/modeling');
const { booleans, primitives } = jscad
const { cube, sphere } = primitives;

const main = (params) => {
	return sphere({radius: 2})  
} 

const teste = () => { 
	return cube()
}


module.exports = { main, teste}   