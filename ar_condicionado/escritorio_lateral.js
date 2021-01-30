const dim = { parede: 2.4, aba: 20, isopor: 33, z: 200 }
const dim_slot = [9, 9, dim.z]
const dim_pin = [5, 8, dim.z]
const dim_base = [dim.isopor + 2 * dim.parede, dim.parede + dim.aba, dim.z]
const dim_isopor = [dim.isopor, dim.aba, dim.z]

module.exports = { dim, dim_slot, dim_base, dim_isopor, dim_pin }