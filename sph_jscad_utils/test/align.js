const expect = require('chai').expect;
const jscad = require('@jscad/modeling');
const { cube } = jscad.primitives;
const { measureBoundingBox } = jscad.measurements
const { translate } = jscad.transforms

const align = require('../align.js').align;

"use strict"

describe('#align()', function () {

  const cube1 = translate([30, 50, 80], cube({ size: 10 }))
  const testcube = cube({ size: 2 })


  context('without arguments', function () {
    it('should throw error', function () {
      expect(function () {
        align()
      }).to.throw(TypeError, 'obj must be an openjscad object')
    })
  })

  context('with some arguments', function () {
    it('should return aligned cube', function () {
      expect(measureBoundingBox(align(testcube, { ref: cube1, center: "xyz" }))).to.deep.equal([[29, 49, 79], [31, 51, 81]])
    })

    it('should return unmoved object with no other params', function () {
      expect(measureBoundingBox(align(testcube))).to.deep.equal(measureBoundingBox(testcube))
    })

  })

})

