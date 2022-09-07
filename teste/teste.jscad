const { sphere, cube } = require("@jscad/modeling").primitives;

const main = () => {
  return cube({ size: 10 }); // a single shape
};

module.exports = { main };
