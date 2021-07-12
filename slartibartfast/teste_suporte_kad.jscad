const { subtract, union } = require("@jscad/modeling/src/operations/booleans");
const { translate } = require("@jscad/modeling/src/operations/transforms");
const { cuboid, roundedCuboid } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { gen_dupont3, gen_buraco_dupont3 } = require("./componentes/dupont3.js");
const { gen_suporte_kad, gen_buraco_suporte_kad } = require("./componentes/fixador-kad.js");

const x = 0;
const y = 1;
const z = 2;

const main = (params) => {
  "use strict";

  let sim_caixa = cuboid({ size: [15, 15, 2] })

  let kad = align(gen_suporte_kad(), {ref: sim_caixa, begin: 'z'})

  return subtract(union(sim_caixa, kad), gen_buraco_suporte_kad(kad))
};

module.exports = { main };
