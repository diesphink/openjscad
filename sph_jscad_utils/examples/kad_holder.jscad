const { kad_holder, buraco_kad_holder } = require("../kad_holder.js");
const { align } = require("../align.js");

const jscad = require("@jscad/modeling");
const { cuboid } = jscad.primitives;
const { translate } = jscad.transforms;
const { union, subtract } = jscad.booleans;

("use strict");

const main = (params) => {
  base = cuboid({ size: [70, 50, 10] });
  base = subtract(
    base,
    align(buraco_kad_holder(80), { ref: base, begin: "z", center: "x", end: "y", margins: [0, 5, 0] })
  );

  return base;
};

module.exports = { main };
