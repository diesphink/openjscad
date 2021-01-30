const { trilho } = require('./trilho.jscad') 
const { rotateY, translate } = require('@jscad/modeling/src/operations/transforms');

const main = (params) => {
    // return split(rotateX(-Math.PI/2, trilho()[1]), {axis: 'z', at: 1})[0]
    return translate([20, 0, 0], rotateY(Math.PI/2, trilho()[1]))
}

module.exports = { main} 