const { subtract, union, intersect } = require("@jscad/modeling/src/operations/booleans");
const { rotateZ } = require("@jscad/modeling/src/operations/transforms");

const { align } = require("sph_jscad_utils/align.js");
const { gen_relay, gen_buraco_relay } = require("./componentes/relay.js");
const { gen_buraco_c110v } = require("./componentes/conector_110v.js");
const { gen_tomada, gen_buraco_tomada } = require("./componentes/tomada.js");
const { gen_caixa, gen_suportes } = require("./componentes/caixa.js");
const { wago3er } = require("./componentes/wago-3er-solo.js");
const { dim } = require("./componentes/dimensions.js");
const { buraco_kad_holder } = require("sph_jscad_utils/kad_holder.js");
const { gen_terminal, gen_buraco_terminal } = require("./componentes/terminal.js");
const { cuboid } = require("@jscad/modeling/src/primitives");

const x = 0;
const y = 1;
const z = 2;

const main = (params) => {
  "use strict";

  let caixa = gen_caixa(dim.caixa.size, dim.caixa.paredes, {
    innerRadius: dim.caixa.innerRadius,
    outerRadius: dim.caixa.outerRadius,
  });

  let tomada = gen_tomada();

  tomada = align(tomada, { ref: caixa, end: "xy", begin: "z", margins: [0, dim.caixa.paredes[y], 0] });

  var wagos = rotateZ(Math.PI / 2, wago3er());
  wagos = union(wagos, align(wagos, { ref: wagos, beginToEnd: "x", margins: [3, 0, 0] }));
  wagos = align(wagos, { ref: caixa, center: "x", begin: "yz", margins: dim.caixa.paredes });

  let relay = align(gen_relay(), {
    ref: caixa,
    begin: "xz",
    end: "y",
    margins: dim.caixa.paredes,
  });

  let c110v = align(gen_buraco_c110v(), {
    ref: caixa,
    begin: "xyz",
    margins: [dim.caixa.paredes[x] + 3, 0, dim.caixa.paredes[z]],
  });

  let trilho_kad = align(buraco_kad_holder(dim.caixa.size[y]), {
    ref: caixa,
    center: "x",
    begin: "z",
    end: "y",
    margins: [0, 5, 0],
  });

  let terminal = align(gen_terminal(), { ref: caixa, center: "x", end: "y", begin: "z", margins: dim.caixa.paredes });

  let suportes = gen_suportes(caixa, { axis: "y" });

  return subtract(
    union(caixa, tomada, wagos, suportes, terminal, relay),
    gen_buraco_tomada(tomada),
    gen_buraco_relay(relay),
    gen_buraco_terminal(terminal, dim.caixa.paredes[y]),
    trilho_kad,
    c110v
  );
};

module.exports = { main };
