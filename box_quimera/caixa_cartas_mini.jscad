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

const raw = require("./caixa_cartas_mini_raw.stl");
const { mirrorY, mirrorZ } = require("@jscad/modeling/src/operations/transforms");

const x = 0,
  y = 1,
  z = 2;

const main = (params) => {
  var partes = scission(raw);
  caixa_raw = union(partes[0]);
  tampa_raw = union(partes[1]);
  tampa_raw = align(mirrorZ(tampa_raw), { begin: "y", ref: caixa_raw });
  var half1 = split(tampa_raw, { axis: "y", at: 43 })[0];
  var half2 = align(mirrorY(half1), { ref: half1, beginToEnd: "y" });
  var tampa = union(half1, half2);

  var caixa = align(caixa_raw, {ref: tampa, beginToEnd:'z', begin: 'y', center: 'x', margins: [0, 0, -2.5]})

  return union(caixa, tampa);
};

module.exports = { main };
