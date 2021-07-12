const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate, rotateX } = require("@jscad/modeling/src/operations/transforms");
const { cuboid, roundedCuboid } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { screw } = require("sph_jscad_utils/screw.js");
const { split } = require("sph_jscad_utils/split.js");
const { xyRoundedCuboid } = require("sph_jscad_utils/xyroundedcuboid.js");
const { dim } = require("./dimensions.js");

const x = 0;
const y = 1;
const z = 2;

const { slot, suporte, altura_parafuso, trilho } = dim.kad;

const gen_suporte_kad = () => {
  let base = split(roundedCuboid({ size: [suporte[x], suporte[y], suporte[z] + 1], roundRadius: 1 }), {
    axis: "z",
    at: [1],
  })[1];

  m3 = translate(
    [0, 0, altura_parafuso],
    align(rotateX(Math.PI / 2, screw(3, 20)), { ref: base, center: "xy", begin: "z" })
  );

  return subtract(base, m3);
};

const gen_buraco_suporte_kad = (base) => {
  return align(roundedCuboid({ size: slot, roundRadius: 1 }), { ref: base, center: "xyz" });
};

const gen_trilho = (size, base, { outerRadius = 2 } = {}) => {
  let trilhos = align(xyRoundedCuboid({ size: [size[x], size[y], trilho[z]], roundRadius: outerRadius }), {
    ref: base,
    center: "xy",
    endToBegin: "z",
  });

  trilhos = subtract(
    trilhos,
    align(cuboid({ size: [trilho[x], size[y], trilho[z]] }), {
      ref: base,
      center: "x",
      end: "y",
      endToBegin: "z",
      margins: [0, -15, 0],
    })
  );

  return trilhos;
};

module.exports = { gen_suporte_kad, gen_buraco_suporte_kad, gen_trilho };
