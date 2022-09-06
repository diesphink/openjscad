const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate, rotateX, rotateY } = require("@jscad/modeling/src/operations/transforms");
const { roundedCuboid, cuboid, cylinder } = require("@jscad/modeling/src/primitives");
const { split } = require("sph_jscad_utils/split.js");
const { align } = require("sph_jscad_utils/align.js");

const x = 0,
  y = 1,
  z = 2;

const dParede = 0.8;
const dPrimeiro = [95, 68, 24];
const dCartas = 3;

const divisorias = () => {
  var parede1 = cuboid({ size: [dParede, dPrimeiro[y], dPrimeiro[z] + dParede] });
  var parede2 = align(cuboid({ size: [dPrimeiro[x], dParede, dPrimeiro[z]] }), {
    ref: parede1,
    begin: "xz",
    end: "y",
    margins: [0, dCartas, 0],
  });
  var piso = align(cuboid({ size: [dPrimeiro[x], dPrimeiro[y] - dCartas, dParede] }), {
    ref: parede2,
    end: "xy",
    beginToEnd: "z",
  });
  return rotateY(Math.PI, union(parede1, parede2, piso));
};

const main = (params) => {
  //   return divisorias();
  return divisorias();
};

module.exports = { main };
