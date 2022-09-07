const dungeon = require("./axoblock-test-files-e-dungeon-tile.jscad");
const frame = require("./axoblock-test-files-e-axoblock-frame.jscad");
const { cuboid } = require("@jscad/modeling/src/primitives");
const { measureBoundingBox } = require("@jscad/modeling/src/measurements");
const { subtract, union } = require("@jscad/modeling/src/operations/booleans");
const { align } = require("sph_jscad_utils/align.js");
const { translate, rotateX } = require("@jscad/modeling/src/operations/transforms");

const main = (params) => {
  //   return divisorias();
  base = dungeon.main()[0];
  console.log(base);
  const ob = measureBoundingBox(base);
  console.log(ob);
  cubo = align(cuboid({ size: [ob[1][0] - ob[0][0] -1, ob[1][1] - ob[0][1] -1, 2.5] }), {
    ref: base,
    center: "xy",
    begin: "z",
  });
  //   base = align(base, {ref: cubo, center:'xyz'})
  console.log("s");
  furador = subtract(translate([0, 0, -0.2], cubo), base);

  fr = frame.main()[0]
  fr = align(fr, {ref: furador, center:'xy', begin: 'z'})
  return subtract(fr, furador);
};

module.exports = { main };
