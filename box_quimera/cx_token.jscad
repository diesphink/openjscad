const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate, rotateZ } = require("@jscad/modeling/src/operations/transforms");
const { roundedCuboid, cuboid, cylinder } = require("@jscad/modeling/src/primitives");
const { split } = require("sph_jscad_utils/split.js");
const { align } = require("sph_jscad_utils/align.js");
const batt = require("./flexbatterCR123Ax1.js");

const x = 0,
  y = 1,
  z = 2;

const placa = [30, 64, 22];
const parede = 0.8;
const corner = [7, 5, 22];

const parafuso = {
  distancia_borda: 1.5,
  radius: 1.5,
  distancia: 20,
};

const buraco = {
  size: [10, parede, 5],
  altura: 2,
};

const cx_token = () => {
  var cx = roundedCuboid({ size: placa, roundRadius: 0.4 });
  buraco_inferior = align(cuboid({ size: [placa[x] - 2 * parede, placa[y] - 2 * parede, placa[z] - parede] }), {
    ref: cx,
    center: "xy",
    end: "z",
  });
  cx = subtract(cx, [buraco_inferior]);

  var corner1 = align(cuboid({ size: corner }), { ref: cx, end: "y", begin: "xz", margins: [parede, parede, 0] });
  var corner2 = align(cuboid({ size: corner }), { ref: cx, end: "xy", begin: "z", margins: [parede, parede, 0] });
  cx = union(cx, corner1, corner2);

  var parafusos = cylinder({ radius: parafuso.radius, height: placa[z] - parede });
  parafusos = union(parafusos, translate([parafuso.distancia, 0, 0], parafusos));
  parafusos = align(parafusos, {
    ref: cx,
    center: "x",
    begin: "z",
    end: "y",
    margins: [0, parafuso.distancia_borda, parede],
  });
  cx = subtract(cx, parafusos);

  // var buraco_onoff = align(cuboid({ size: buraco.size }), {
  //   ref: cx,
  //   center: "x",
  //   begin: "yz",
  //   margins: [0, 0, buraco.altura],
  // });
  // cx = subtract(cx, buraco_onoff);
  battery = rotateZ(-Math.PI/2, union(batt.solid1()))
  cx = union(cx, align(battery, {ref: cx, center: 'xy', begin: 'z', gap:[0, 0, parede]}))

  return cx;
};

const main = (params) => {
  return cx_token();
};

module.exports = { main };
