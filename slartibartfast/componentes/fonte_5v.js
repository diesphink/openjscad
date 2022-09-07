const { subtract, union } = require("@jscad/modeling/src/operations/booleans");
const { translate, rotateY } = require("@jscad/modeling/src/operations/transforms");
const { cuboid, roundedCuboid } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { screw } = require("sph_jscad_utils/screw.js");
const { sphRoundedCuboid } = require("sph_jscad_utils/sphroundedcuboid.js");
const { split } = require("sph_jscad_utils/split.js");
const { dim } = require("./dimensions.js");

const x = 0;
const y = 1;
const z = 2;

const { size, x_parede, y_folga_cabos, y_espaco_conectores, parafuso } = dim.fonte5v;

const gen_fonte5v = () => {
  "use strict";

  let base = roundedCuboid({
    size: [
      size[x] + x_parede + 2,
      dim.caixa2.size[y] - 2 * dim.caixa2.paredes[y] - y_folga_cabos + 2,
      dim.caixa2.size[z] - dim.caixa2.paredes[z],
    ],
    roundRadius: 1,
    straightOn: "y",
  });

  base = split(base, { axis: "x", at: 2 })[1];
  base = split(base, { axis: "y", at: dim.caixa2.size[y] - 2 * dim.caixa2.paredes[y] - y_folga_cabos })[0];

  base = subtract(base, gen_buraco_fonte5v(base));
  base = subtract(
    base,
    align(cuboid({ size: [size[x], y_espaco_conectores, dim.caixa2.size[z]] }), {
      ref: base,
      begin: "xzy",
    })
  );

  let m3 = align(rotateY(Math.PI / 2, screw(parafuso.diameter, x_parede)), {
    ref: base,
    begin: "yz",
    end: "x",
    margins: [0, parafuso.distancia_y, parafuso.distancia_z],
  });

  return subtract(base, m3);
};

const gen_buraco_fonte5v = (base) => {
  "use strict";

  return align(cuboid({ size }), { ref: base, begin: "yxz" });
};

module.exports = { gen_fonte5v, gen_buraco_fonte5v };
