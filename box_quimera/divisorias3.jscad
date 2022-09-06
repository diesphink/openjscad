const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate, rotateX, rotateY } = require("@jscad/modeling/src/operations/transforms");
const { roundedCuboid, cuboid, cylinder } = require("@jscad/modeling/src/primitives");
const { split } = require("sph_jscad_utils/split.js");
const { align } = require("sph_jscad_utils/align.js");

const x = 0,
  y = 1,
  z = 2;

const dParede = 1.6;

// const dVao = [68.4, 95.4, 45];
const dVao = [95.4, 68.4, 40];
const dToken = [35, 64.5, 35];
const dMini = {
  diametro: 26,
  plateau: 8,
  dim: [30, dVao[y], 8],
  finger_radius: 16,
};

const dCartas = [dVao[x] - dToken[x] - dMini.dim[x], dVao[y], 20];

const divisoria = () => {
  // Mini
  var div = cuboid({ size: dMini.dim });
  div = subtract(
    div,
    align(cylinder({ radius: dMini.diametro / 2, height: dMini.dim[z] }), { ref: div, center: "xy", end: "z" })
  );

  // Paredes cartas
  div = union(
    div,
    align(cuboid({ size: [dCartas[x], dParede, dCartas[z]] }), { ref: div, begin: "z", end: "y", endToBegin: "x" }),
    align(cuboid({ size: [dParede, dCartas[y], dCartas[z]] }), { ref: div, begin: "zx", end: "y" })
  );

  div = subtract(div, [
    translate(
      [0, 0, dMini.finger_radius],
      align(rotateY(Math.PI / 2, cylinder({ radius: dMini.finger_radius, height: dMini.dim[x] })), {
        ref: div,
        center: "xy",
        end: "z",
      })
    ),
  ]);

  // Token
  div = union(
    div,
    align(cuboid({ size: [dParede, dVao[y], dVao[z]]}), { ref: div, end: "x", begin: 'yz' }),
    align(cuboid({ size: [dToken[x], dVao[y], dMini.dim[z]]}), { ref: div, beginToEnd: "x", begin: 'yz' }),
    align(cuboid({ size: [dToken[x], dVao[y] - dToken[y], dVao[z]]}), { ref: div, beginToEnd: "x", begin: 'yz' }),
  )

  div = subtract(div, [
    translate(
      [0, 0, dMini.finger_radius],
      align(rotateY(Math.PI / 2, cylinder({ radius: dMini.finger_radius, height: dMini.dim[x] })), {
        ref: div,
        center: "xy",
        end: "z",
      })
    ),
  ]);

  return div;
};

const main = (params) => {
  return divisoria();
};

module.exports = { main };
