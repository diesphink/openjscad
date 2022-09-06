const jscad = require("@jscad/modeling");
const { union, subtract } = jscad.booleans;
const { translate, rotateZ } = jscad.transforms;
const { roundedCuboid, cuboid, cylinder } = jscad.primitives;

const { split } = require("sph_jscad_utils/split.js");
const { align } = require("sph_jscad_utils/align.js");
const { distribute, distributeY } = require("sph_jscad_utils/distribute.js");
const batt = require("./flexbatterCR123Ax1.js");
const { rotateX } = require("@jscad/modeling/src/operations/transforms/rotate.js");
const { translateZ } = require("@jscad/modeling/src/operations/transforms/translate.js");
const { extrudeLinear, extrudeRectangular, extrudeRotate } = require("@jscad/modeling").extrusions;

const x = 0,
  y = 1,
  z = 2;

const parede = 0.8;

const dPlaca = [30, 64, 2];
const dBatt = [30, 17, 17];
const dCx = [dPlaca[x], 64, 24];

const dCarr = [30, 17.5, 5]
const dPlugCarr = [parede, 9, 5]

const dOnOff = [parede, 9.5, 13.5]

const dCorner = [7, 5, dCx[z]];

const dParafuso = {
  distancia_borda: 1.5,
  radius: 1.5,
  distancia: [20, -23, 0],
};


const delta = (dimensions, delta) => {
  return [dimensions[0] + delta[0], dimensions[1] + delta[1], dimensions[2] + delta[2]]
}

const suporte_carregador = () => {
  var ext = cuboid({size: delta(dCarr, [0, 2 * parede, 0])})
  return subtract(ext, align(cuboid({size: dCarr}), {ref: ext, center: 'xyz'}))
}



const cx_token = () => {
  // Caixa base
  var cx = roundedCuboid({ size: dCx });
  cx = subtract(
    cx,
    // align(cuboid({ size: [dPlaca[x] - 2, dCx[y] - 2 * parede, dCx[z] - parede] }), { ref: cx, center: "xy", end: "z" }),
    align(cuboid({ size: delta(dCx, [-2*parede, -2*parede, -parede]) }), { ref: cx, center: "xy", begin: "z", margins: [0, 0, parede] })
  );

  var corner1 = align(cuboid({ size: dCorner }), { ref: cx, end: "y", begin: "xz", margins: [parede, parede, 0] });
  var corner2 = align(cuboid({ size: dCorner }), { ref: cx, end: "xy", begin: "z", margins: [parede, parede, 0] });
  var corner3 = translate([0, dParafuso.distancia[y], 0], align(cuboid({ size: dCorner }), { ref: cx, end: "xy", begin: "z", margins: [parede, parede, 0] }));
  cx = union(cx, corner1, corner2, corner3);

  var par1 = cylinder({ radius: dParafuso.radius, height: dCx[z] - parede });
  var par2 = translate([dParafuso.distancia[x], 0, 0], par1);
  var par3 = translate(dParafuso.distancia, par1);
  var parafusos = union(par1, par2, par3);
  parafusos = align(parafusos, {
    ref: cx,
    center: "x",
    begin: "z",
    end: "y",
    margins: [0, dParafuso.distancia_borda, parede],
  });
  cx = subtract(cx, parafusos);


  // Ranhura placa
  // ranhura_placa = cuboid({ size: delta(dPlaca, [50, 50, 4]) });
  // ranhura_placa = union(ranhura_placa, align(cuboid({ size: [dPlaca[x] - 2, dPlaca[y], dPlaca[z]] }), {ref: ranhura_placa, center: 'xy', end: 'z', margins: [0, 0, 4]}))
  
  // ranhura_placa = cuboid({ size: dPlaca });
  // ranhura_placa = union(ranhura_placa, align(cuboid({ size: [dPlaca[x] - 2, dPlaca[y], dPlaca[z] + 6] }), {ref: ranhura_placa, center: 'xy', end: 'z', margins: [0, 0, -2]}))

  // ranhura_placa = align(ranhura_placa, { ref: cx, center: "x", end: "yz", margins: [0, -1, -1] });
  // cx = subtract(cx, ranhura_placa);

  var carr = align(suporte_carregador(), {ref: cx, begin: 'yz', center: 'x', margins: [0, 0, parede]})
  var plugCarr = align(cuboid({size: dPlugCarr}), {ref: carr, begin: 'z', center: 'y', end: 'x', margins: [0, 0, 1 + parede]})
  cx = union(cx, carr)
  cx = subtract(cx, plugCarr)

  var onOff = align(cuboid({size: dOnOff}), {ref:cx, end: 'yx', center: 'yz', margins: [0, 4, 0] })
  onOff = distributeY([corner2, corner3, onOff])[1]
  cx = subtract(cx, onOff)

  // buraco_acima_placa = cuboid({ size: [100, 120, 100] });
  // buraco_acima_placa = align(buraco_acima_placa, { ref: ranhura_placa, begin: "z", center: "yx", margins: [0, 0, 0] });
  // cx = subtract(cx, buraco_acima_placa);

  // ranhura_placa = union(ranhura_placa, cuboid({ size: [dPlaca[x] - 2, dPlaca[y], dCx[z]]}))

  return cx;
};

const main = (params) => {
  return cx_token();
};

module.exports = { main };
