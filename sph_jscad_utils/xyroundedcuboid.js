const { split } = require("./split.js");
const { roundedCuboid } = require("@jscad/modeling/src/primitives");

("use strict");

const xyRoundedCuboid = ({
  center = null,
  size,
  roundRadius,
  segments = null,
} = {}) => {
  params = {
    size: [size[0], size[1], size[2] + 2 * roundRadius],
    roundRadius,
  };
  if (center) params.center = center;
  if (segments) params.segments = segments;
  return split(roundedCuboid(params), {
    axis: "z",
    at: [roundRadius, size[2] + roundRadius],
  })[1];
};

const xzRoundedCuboid = ({
  center = null,
  size,
  roundRadius,
  segments = null,
} = {}) => {
  params = {
    size: [size[0], size[1] + 2 * roundRadius, size[2]],
    roundRadius,
  };
  if (center) params.center = center;
  if (segments) params.segments = segments;
  return split(roundedCuboid(params), {
    axis: "y",
    at: [roundRadius, size[1] + roundRadius],
  })[1];
};



module.exports = { xyRoundedCuboid , xzRoundedCuboid};
