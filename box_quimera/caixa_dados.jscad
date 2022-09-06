const jscad = require("@jscad/modeling");
const { union, subtract, scission } = jscad.booleans;
const { translate, rotateZ } = jscad.transforms;
const { roundedCuboid, cuboid, cylinder } = jscad.primitives;

const { split } = require("sph_jscad_utils/split.js");
const { align } = require("sph_jscad_utils/align.js");
const { distribute, distributeY } = require("sph_jscad_utils/distribute.js");
const { rotateX } = require("@jscad/modeling/src/operations/transforms/rotate.js");
const { translateZ } = require("@jscad/modeling/src/operations/transforms/translate.js");
const { extrudeLinear, extrudeRectangular, extrudeRotate } = require("@jscad/modeling").extrusions;

const raw = require("./caixa_dados_raw.stl");
const { mirrorY } = require("@jscad/modeling/src/operations/transforms");

const x = 0,
  y = 1,
  z = 2;

const main = (params) => {
  caixa_raw = union(scission(raw)[0]);
  var half1 = split(caixa_raw, { axis: "y", at: 43 })[0];
  var half2 = align(mirrorY(half1), { ref: half1, beginToEnd: "y" });
  return union(half1, half2);
};

module.exports = { main };
