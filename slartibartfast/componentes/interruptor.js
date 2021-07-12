const { cuboid } = require("@jscad/modeling/src/primitives");
const { dim } = require("./dimensions.js");

const x = 0;
const y = 1;
const z = 2;

const gen_buraco_interruptor = () => {
  "use strict";

  return cuboid({ size: dim.interruptor.size });
};

module.exports = { gen_buraco_interruptor };
