const { trilho } = require('./trilho.jscad') 
const { rotateY } = require('@jscad/modeling/src/operations/transforms');
const { split } = require('sph_jscad_utils/split.js')

const main = (params) => {
    // return split(rotateY(Math.PI/2, trilho()[0]), {axis: 'z', at: 1})[0]
    return rotateY(-Math.PI/2, trilho()[0])
}

module.exports = { main} 