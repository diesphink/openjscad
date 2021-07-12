const { subtract, union } = require("@jscad/modeling/src/operations/booleans");
const { rotateZ } = require("@jscad/modeling/src/operations/transforms");

const { align } = require("sph_jscad_utils/align.js");
const { distribute } = require("sph_jscad_utils/distribute.js");
const { gen_relay, gen_buraco_relay } = require("./componentes/relay.js");
const { gen_buraco_c110v } = require("./componentes/conector_110v.js");
const { gen_buraco_interruptor } = require("./componentes/interruptor.js");
const { gen_tomada, gen_buraco_tomada } = require("./componentes/tomada.js");
const { gen_caixa, gen_tampa, gen_suportes } = require("./componentes/caixa.js");
const { wago3er } = require("./componentes/wago-3er-solo.js");
const { gen_suporte_kad, gen_buraco_suporte_kad, gen_trilho } = require("./componentes/fixador-kad.js");
const { dim } = require("./componentes/dimensions.js");

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

  tomada = align(tomada, { ref: caixa, end: "xy", begin: "z" });

  var wagos = rotateZ(Math.PI / 2, wago3er());
  wagos = union(wagos, align(wagos, { ref: wagos, beginToEnd: "x", margins: [3, 0, 0] }));
  wagos = align(wagos, { ref: caixa, center: "x", begin: "yz" });

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

  let c110v2 = align(gen_buraco_c110v(), {
    ref: caixa,
    begin: "z",
    end: "y",
    center: "x",
    margins: [0, 0, dim.caixa.paredes[z]],
  });

  [, c110v2, tomada] = distribute([gen_buraco_relay(relay), c110v2, tomada], { gap: "x" });

  let interruptor = align(gen_buraco_interruptor(), {
    ref: c110v2,
    center: "x",
    end: "y",
    beginToEnd: "z",
    margins: [0, 0, (dim.caixa.size[z] - dim.caixa.paredes[z] - dim.c110v.size[z] - dim.interruptor.size[z]) / 2],
  });

  let kad = align(gen_suporte_kad(), { ref: caixa, center: "xy", begin: "z" });
  let trilhos = gen_trilho(dim.caixa.size, kad, {outerRadius: dim.caixa.outerRadius})

  let suportes = gen_suportes(caixa, { axis: "y" });

  return subtract(
    union(caixa, tomada, wagos, relay, suportes, kad, trilhos),
    gen_buraco_tomada(tomada),
    gen_buraco_relay(relay),
    gen_buraco_suporte_kad(kad),
    c110v,
    c110v2,
    interruptor
  );
};

module.exports = { main };
