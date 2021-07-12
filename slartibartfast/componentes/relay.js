const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate } = require("@jscad/modeling/src/operations/transforms");
const { cuboid } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { screw } = require("sph_jscad_utils/screw.js");
const { dim } = require("./dimensions.js");

const x = 0;
const y = 1;
const z = 2;

const { placa, buraco, posicao_buraco, espaco_buraco } = dim.relay;

const gen_relay = () => {
  let suporte = cuboid({ size: [placa[x] + 2, placa[y] + 2, placa[z]] });
  suporte = subtract(
    suporte,
    align(cuboid({ size: [placa[x] - 10, placa[y] + 2, placa[z]] }), { ref: suporte, center: "xyz" })
  );

  let parafuso = screw(3, placa[z]);
  let buracos_parafusos = union(
    align(parafuso, { ref: suporte, begin: "xyz", margin: espaco_buraco }),
    align(parafuso, { ref: suporte, begin: "xz", end: "y", margin: espaco_buraco }),
    align(parafuso, { ref: suporte, begin: "yz", end: "x", margin: espaco_buraco }),
    align(parafuso, { ref: suporte, begin: "z", end: "xy", margin: espaco_buraco })
  );

  return subtract(suporte, buracos_parafusos);
};

const gen_buraco_relay = (relay) => {
  return translate(posicao_buraco, align(cuboid({ size: buraco }), { ref: relay, begin: "xyz" }));
};

module.exports = { gen_relay, gen_buraco_relay };
