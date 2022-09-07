const { subtract, union, intersect } = require("@jscad/modeling/src/operations/booleans");
const { rotateZ } = require("@jscad/modeling/src/operations/transforms");

const { align } = require("sph_jscad_utils/align.js");
const { distribute } = require("sph_jscad_utils/distribute.js");
const { gen_relay, gen_buraco_relay } = require("./componentes/relay.js");
const { gen_buraco_c110v } = require("./componentes/conector_110v.js");
const { gen_tomada, gen_buraco_tomada } = require("./componentes/tomada.js");
const { gen_caixa, gen_suportes } = require("./componentes/caixa.js");
const { wago3er } = require("./componentes/wago-3er-solo.js");
const { gen_buraco_fonte5v, gen_fonte5v } = require("./componentes/fonte_5v.js");
const { dim } = require("./componentes/dimensions.js");
const { buraco_kad_holder } = require("sph_jscad_utils/kad_holder.js");
const { gen_terminal, gen_buraco_terminal } = require("./componentes/terminal.js");
const { cuboid } = require("@jscad/modeling/src/primitives");

const x = 0;
const y = 1;
const z = 2;

const main = (params) => {
  "use strict";

  let caixa = gen_caixa(dim.caixa2.size, dim.caixa2.paredes, {
    innerRadius: dim.caixa2.innerRadius,
    outerRadius: dim.caixa2.outerRadius,
  });

  let fonte5v = align(gen_fonte5v(), {
    ref: caixa,
    begin: "zx",
    end: "y",
    margins: dim.caixa2.paredes,
  });

  let c110v = align(gen_buraco_c110v(), {
    ref: caixa,
    begin: "xyz",
    margins: [dim.caixa2.paredes[x] + 5, 0, dim.caixa2.paredes[z]],
  });

  let relay1 = align(rotateZ(0, gen_relay()), {
    ref: caixa,
    begin: "yz",
    end: "x",
    margins: [dim.caixa2.paredes[x], dim.caixa2.paredes[y], dim.caixa2.paredes[z]],
  });

  let relay2 = align(relay1, { ref: relay1, endToBegin: "x", margin: 3 });

  var wagos = align(rotateZ(Math.PI, wago3er()), { ref: caixa, begin: "yz", margins: dim.caixa2.paredes });
  wagos = union(wagos, align(wagos, { ref: wagos, beginToEnd: "y", margin: 3 }));
  wagos = align(wagos, { ref: relay2, endToBegin: "x", margin: 3 });

  let trilho_kad = align(buraco_kad_holder(dim.caixa2.size[y]), {
    ref: caixa,
    center: "x",
    begin: "z",
    end: "y",
    margins: [0, 5, 0],
  });

  let suportes = gen_suportes(caixa, { axis: "x" });

  return subtract(
    union(caixa, suportes, fonte5v, relay1, relay2, wagos),
    trilho_kad,
    gen_buraco_fonte5v(fonte5v),
    c110v
  );
};

module.exports = { main };
