const { subtract } = require("@jscad/modeling/src/operations/booleans");
const { cuboid } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { xyRoundedCuboid } = require("sph_jscad_utils/xyroundedcuboid.js");
const { dim } = require("./dimensions.js");

const x = 0;
const y = 1;
const z = 2;

const { superior, inferior, buraco, paredes } = dim.tomada;

const gen_tomada = () => {
  let dim_base_tomada = [
    superior[x] + paredes[x],
    superior[y] + inferior[y] + paredes[y],
    dim.caixa.size[z] + paredes[z],
  ];

  let base_tomada = xyRoundedCuboid({ size: dim_base_tomada, roundRadius: 3 });

  let tomada_superior = align(cuboid({ size: superior }), { ref: base_tomada, center: "x", end: "yz" });
  let tomada_inferior = align(cuboid({ size: inferior }), { ref: base_tomada, center: "x", end: "z", begin: "y" });

  return subtract(base_tomada, tomada_superior, tomada_inferior);
};

const gen_buraco_tomada = (tomada) => {
  return align(cuboid({ size: dim.tomada.buraco }), { ref: tomada, center: "x", end: "yz" });
};

module.exports = { gen_tomada, gen_buraco_tomada };
