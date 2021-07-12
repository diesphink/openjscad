const { union } = require("@jscad/modeling/src/operations/booleans");
const { translate, rotateX } = require("@jscad/modeling/src/operations/transforms");
const { cuboid } = require("@jscad/modeling/src/primitives");

const { align } = require("sph_jscad_utils/align.js");
const { screw } = require("sph_jscad_utils/screw.js");
const { dim } = require("./dimensions.js");

const x = 0;
const y = 1;
const z = 2;

const { size, espacamento } = dim.c110v;

const gen_buraco_c110v = () => {
  "use strict";

  let principal = cuboid({ size });

  var m3s = rotateX(Math.PI / 2, screw(4, size[y]));
  m3s = union(m3s, translate([espacamento, 0, 0], m3s));
  m3s = align(m3s, { ref: principal, center: "xyz" });
  
  return union(principal, m3s);
};

module.exports = { gen_buraco_c110v };
