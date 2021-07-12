const { subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate } = require("@jscad/modeling/src/operations/transforms");
const { cuboid, roundedCuboid } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { gen_dupont3, gen_buraco_dupont3 } = require("./componentes/dupont3.js");

const x = 0;
const y = 1;
const z = 2;

const main = (params) => {
  "use strict";

  let sim_caixa = translate(
    [5, 5, 5],
    subtract(cuboid({ size: [30, 15, 17] }), translate([0, -1, 1], cuboid({ size: [30, 14, 17] })))
  );

  let dupont3 = translate([0, 0, 1], align(gen_dupont3(), { ref: sim_caixa, begin: "z", center: "x", end: "y" }));

  return [subtract(sim_caixa, gen_buraco_dupont3(dupont3)), dupont3];
};

module.exports = { main };
