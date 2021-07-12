const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate } = require("@jscad/modeling/src/operations/transforms");
const { cuboid } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { screw } = require("sph_jscad_utils/screw.js");
const { dim } = require("./dimensions.js");

const x = 0;
const y = 1;
const z = 2;

const gen_dupont3 = () => {
    return cuboid()
//   let base = cuboid({ size: dim.dupont3.base });
//   let buraco_conector_macho = translate(
//     [0, 0, 1],
//     align(cuboid({ size: dim.dupont3.buraco }), {
//       ref: base,
//       center: "xy",
//       begin: "z",
//     })
//   );

//   let conector_macho = align(cuboid({ size: dim.dupont3.conector_macho }), {
//     ref: buraco_conector_macho,
//     center: "zx",
//     beginToEnd: "y",
//   });

//   let conector_femea = align(cuboid({ size: dim.dupont3.conector_femea }), {
//     ref: buraco_conector_macho,
//     center: "zx",
//     begin: "y",
//   });

//   return subtract(base, buraco_conector_macho);
};

const gen_buraco_dupont3 = (dupont3) => {
    return cuboid()
//   let buraco_ranhura = translate(
//     [0, 0, 0.2],
//     align(cuboid({ size: dim.dupont3.ranhura_vertical }), {
//       ref: buraco_conector_macho,
//       center: "x",
//       beginToEnd: "z",
//       begin: "y",
//     })
//   );

//   let buraco_asa_menor = align(xzRoundedCuboid({ size: dim.dupont3.asa_menor, roundRadius: 1 }), {
//     ref: conector_femea,
//     center: "zx",
//     begin: "y",
//   });

//   let buraco_asa_maior = align(cuboid({ size: dim.dupont3.asa_maior }), {
//     ref: buraco_asa_menor,
//     center: "zx",
//     beginToEnd: "y",
//   });

//   return union(buraco_ranhura, buraco_asa_maior, buraco_asa_menor);
};

module.exports = { gen_dupont3, gen_buraco_dupont3 };
