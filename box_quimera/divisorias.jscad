const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate, rotateX } = require("@jscad/modeling/src/operations/transforms");
const { roundedCuboid, cuboid, cylinder } = require("@jscad/modeling/src/primitives");
const { split } = require("sph_jscad_utils/split.js");
const { align } = require("sph_jscad_utils/align.js");

const x = 0,
  y = 1,
  z = 2;

const parede = 2;

const full = [68, 95, 20];

const mini_plateau = 8;
const mini_diam = 26;
const mini = [full[x] - 2 * parede, mini_diam, full[z] - mini_plateau];

const cartas = [full[x] - parede, (full[y] - mini_diam - 2 * parede) / 2, full[z]];
const dados = [full[x] - parede, (full[y] - mini_diam - 2 * parede) / 2, 40];

const folga_dados = 0.6;

const finger_radius = 16;

const divisorias = () => {
  var divs = roundedCuboid({ roundRadius: 1, size: full });
  divs = subtract(divs, [
    align(cuboid({ size: cartas }), { ref: divs, end: "yz", begin: "x" }),
    align(cuboid({ size: dados }), { ref: divs, begin: "y", end: "xz" }),
    align(cuboid({ size: mini }), { ref: divs, center: "xy", end: "z" }),
    align(cylinder({ radius: mini_diam / 2, height: full[z] }), { ref: divs, center: "xy", end: "z" }),
    translate(
      [0, 0, finger_radius],
      align(rotateX(Math.PI / 2, cylinder({ radius: finger_radius, height: full[y] })), {
        ref: divs,
        center: "xy",
        end: "z",
      })
    ),
  ]);
  return divs;
};

const cx_dados = () => {
  var cx = roundedCuboid({ size: [dados[x] - folga_dados, dados[y] - folga_dados, dados[z]], roundRadius: 2 });
  cx = subtract(cx, [
    align(roundedCuboid({ size: [dados[x] - parede, dados[y] - parede, dados[z] - parede/2], roundRadius: 4 }), { ref: cx, center: "xy", end: "z" }),
  ])
  return cx;
};

const main = (params) => {
    return divisorias();
  // return cx_dados();
};

module.exports = { main };
