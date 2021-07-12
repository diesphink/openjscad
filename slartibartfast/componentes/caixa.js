const { subtract, union, intersect } = require("@jscad/modeling/src/operations/booleans");
const { rotateZ, rotateY } = require("@jscad/modeling/src/operations/transforms");
const { cuboid, cylinder, cylinderElliptic } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { sphRoundedCuboid } = require("sph_jscad_utils/sphroundedcuboid.js");
const { screw, STYLE_CYLINDER } = require("sph_jscad_utils/screw.js");
const { dim } = require("./dimensions.js");
const { split } = require("sph_jscad_utils/split.js");

const x = 0;
const y = 1;
const z = 2;

const gen_caixa = (size, paredes, { innerRadius = 1, outerRadius = 2 } = {}) => {
  let base = sphRoundedCuboid({ size: size, roundRadius: outerRadius, straightOn: "z" });
  base = subtract(
    base,
    align(
      sphRoundedCuboid({
        size: [size[x] - 2 * paredes[x], size[y] - 2 * paredes[y], size[z] - paredes[z]],
        roundRadius: innerRadius,
        straightOn: "z",
      }),
      { ref: base, center: "xy", end: "z" }
    )
  );
  return base;
};

const gen_suportes = (caixa, { axis = "x" } = {}) => {
  let center = axis == "x" ? "y" : "x";

  let suporte = suporte_m3();
  if (axis == "y") suporte = rotateZ(Math.PI / 2, suporte);

  let sup1 = align(suporte, { ref: caixa, center, end: "z", endToBegin: axis });

  let sup2 = align(rotateZ(Math.PI, sup1), { ref: caixa, center, end: "z", beginToEnd: axis });
  return union(sup1, sup2);
};

function suporte_m3({ raio = 6, altura = 10, altura_superior = 3 } = {}) {
  var p1 = cylinder({ radius: raio, height: altura_superior });

  var p2 = align(
    cylinderElliptic({
      startRadius: [0.01, 0.01],
      endRadius: [raio, raio],
      height: altura - altura_superior,
    }),
    { ref: p1, center: "xy", endToBegin: "z" }
  );

  let base = split(union(p1, p2), { axis: "x" })[0];

  parafuso = align(rotateY(Math.PI, screw(3, 10, { head_length: 3, head_diameter: 6, head_style: STYLE_CYLINDER })), {
    ref: base,
    center: "xy",
    begin: "z",
  });

  return subtract(base, parafuso);
}

const gen_tampa = (size, paredes) => {
  return cuboid({
    size: [size[x], size[y], paredes[z]],
  });
};

module.exports = { gen_caixa, gen_tampa, gen_suportes };
