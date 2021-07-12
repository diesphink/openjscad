const { cylinder, cylinderElliptic } = require("@jscad/modeling/src/primitives");
const { union } = require("@jscad/modeling/src/operations/booleans");
const { align } = require("./align.js");

const STYLE_CONE = 0;
const STYLE_CYLINDER = 1;

const screw = (diameter, length, { head_length = 0, head_diameter = 8, head_style = STYLE_CONE } = {}) => {
  const body = cylinder({ height: length - head_length, radius: diameter / 2 });

  if (head_length == 0) return body;

  let head;

  if (head_style == STYLE_CONE) {
    head = align(
      cylinderElliptic({
        height: head_length,
        startRadius: [diameter / 2, diameter / 2],
        endRadius: [head_diameter / 2, head_diameter / 2],
      }),
      {
        ref: body,
        center: "xy",
        beginToEnd: "z",
      }
    );
  } else if (head_style == STYLE_CYLINDER) {
    head = align(cylinder({ height: head_length, radius: head_diameter/2 }), {
      ref: body,
      center: "xy",
      beginToEnd: "z",
    });
  }
  return union(body, head);
};

module.exports = { screw, STYLE_CONE, STYLE_CYLINDER };
