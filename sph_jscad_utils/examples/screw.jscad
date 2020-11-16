const { screw, STYLE_CONE } = require('../screw.js')

const main = (params) => {
    "use strict"

    return screw(3, 30, { head_length: 3, head_diameter: 8, head_style: STYLE_CONE })
}

module.exports = { main }
