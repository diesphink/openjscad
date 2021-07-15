const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate, rotateX, mirrorX } = require("@jscad/modeling/src/operations/transforms");
const { cuboid, roundedCuboid, cylinder } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { screw } = require("sph_jscad_utils/screw.js");
const { sphRoundedCuboid } = require("sph_jscad_utils/sphroundedcuboid.js");
const { split } = require("sph_jscad_utils/split.js");
const { dim } = require("./dimensions.js");

const x = 0;
const y = 1;
const z = 2;

const { terminal, suporte, recuo, slot_ziptie, espaco_ziptie_superior, radius_buraco, espaco_entre_suportes } = dim.terminal;

const gen_terminal = () => {
  let base1 = roundedCuboid({ size: [suporte[x], suporte[y] + 1, suporte[z] + 1], roundRadius: 1 });
  base1 = split(base1, { axis: "z", at: 1 })[1];
  base1 = split(base1, { axis: "y", at: suporte[y] })[0];

//   let base2 = roundedCuboid({ size: [suporte[x], suporte[y], suporte[z] + 1], roundRadius: 1 });
//   base2 = split(base2, { axis: "z", at: 1 })[1];
// //   base2 = translate([0, -suporte[y] - espaco_entre_suportes, 0], base2) 
//    base2 = translate([0, -suporte[y] - espaco_entre_suportes, 0], base2) 


  slot = roundedCuboid({ size: slot_ziptie, roundRadius: 0.5 });

  slot_ziptie1 = align(slot, { ref: base1, begin: "z", center: "xy" });
  slot_ziptie2 = align(slot, { ref: base1, end: "z", center: "xy", margins: [0, 0, espaco_ziptie_superior] });
  zipties = union(slot_ziptie1, slot_ziptie2);
  zipties = union(zipties, translate([0, -13, 0], zipties));

  return subtract(base1, align(zipties, {ref: base1, center: 'yx'})); //union(base, translate([0, -]);
};

const gen_buraco_terminal = (base, parede) => {
  b1 = cylinder({ height: parede, radius: radius_buraco });
  b1 = rotateX(Math.PI / 2, b1);
  b1 = align(b1, { ref: base, center: "z", endToBegin: "x", beginToEnd: "y" });
  b1 = translate([-1, 0, -espaco_ziptie_superior / 2], b1);

  b2 = align(b1, { ref: base, center: "z", beginToEnd: "yx" });
  b2 = translate([1, 0, -espaco_ziptie_superior / 2], b2);

  return union(b1, b2);
  //   return cuboid({ size: [2, 2, 2] });
};

module.exports = { gen_terminal, gen_buraco_terminal };
