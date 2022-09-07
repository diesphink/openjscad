const { union, subtract } = require("@jscad/modeling/src/operations/booleans");
const { translate } = require("@jscad/modeling/src/operations/transforms");
const { roundedCuboid, cuboid } = require("@jscad/modeling/src/primitives");
const { split } = require("sph_jscad_utils/split.js");
const { align } = require("sph_jscad_utils/align.js");

const x = 0,
  y = 1,
  z = 2;

const dim = {
  caderno: [100, 150, 15],
  lapiseira: [10, 155, 15],
  dado: [25, 25, 25],
  mini: {
    base: [26, 26, 30],
    total: [35, 35, 40],
  },
  tower: [130, 155, 40],
  caixa: [120, 190, 50],
  parede: 2,
};

dim.tower = []

const mini = () => {
	let d = dim.mini

	let base = cuboid({size: d.base})
	// let resto = cuboid({size: [d.total[x], d.total[y], d.total[z] - d.base[z]]})

	// return union(base, align(resto, {ref: base, center: 'xy', beginToEnd: 'z'} ))
	return base
}

const base = () => {
  let base = cuboid({ size: [dim.caixa[x], dim.caixa[y], dim.caixa[z] / 2] });

  let espaco_caderno = align(
    cuboid({ size: [dim.caixa[x] - 2 * dim.parede, dim.caderno[y], dim.caixa[z] / 2 - dim.parede] }),
    {
      ref: base,
      end: "zy",
      center: "x",
      margins: [0, dim.parede, 0],
    }
  );

  let espaco_lapiseira = align(
    cuboid({ size: [dim.lapiseira[x], dim.lapiseira[y], dim.caixa[z] / 2 - dim.parede] }),
    {
      ref: base,
      end: "z",
      begin: "yx",
      margins: [dim.parede, dim.parede, 0],
    }
  );

  let espaco_mini = align(mini(), {
	  ref: espaco_lapiseira,
	  beginToEnd: 'x',
	  begin: 'zy',
	  margins: [dim.parede, dim.parede, 0]
  })

  base = subtract(base, espaco_caderno, espaco_lapiseira, espaco_mini);

//   base = union(base, align(mini(), {ref: espaco_mini, begin: 'xyz'}))

  return base;
};

const main = (params) => {
  return base();
};

module.exports = { main };
