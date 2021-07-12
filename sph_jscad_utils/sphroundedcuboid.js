const { split } = require("./split.js");
const { roundedCuboid } = require("@jscad/modeling/src/primitives");

("use strict");

const sphRoundedCuboid = ({ center = null, size, roundRadius, segments = null, straightOn = "" }) => {
  const axes = ["x", "y", "z"];
  params = { size: [...size], roundRadius };

  axes.forEach((axis, i) => {
    if (straightOn.includes(axis)) {
      params.size[i] = params.size[i] + 2 * roundRadius;
    }
  });

  if (center) params.center = center;
  if (segments) params.segments = segments;

  cuboid = roundedCuboid(params);

  axes.forEach((axis, i) => {
    if (straightOn.includes(axis)) {
      let at = [roundRadius, params.size[i] - roundRadius];
      cuboid = split(cuboid, { axis, at })[1];
    }
  });

  return cuboid;
};

module.exports = { sphRoundedCuboid };
