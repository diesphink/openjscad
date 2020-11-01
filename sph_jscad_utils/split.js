/*

(c) 2020 diesphink
This code is licensed under MIT license (see LICENSE for details)

Função split

  Recorta o objeto (obj) na posição indicada (at) em um determinado eixo (axis),
  retornando uma matriz de objetos para cada pedaço recortado.

  Os valores possíveis para axis são:
    0 - eixo x
    1 - eixo y
    2 - eixo z

  A posição do recorte pode ser um valor único para o recorte, ou um array com
  os diversos valores. Será recortada cada uma das posições informadas no array.

  Se a posição do recorte (at) não for informado, o objeto será recortado pela
  metade no eixo indicado.

Parâmetros
  obj:    Objeto que será recortado
  axis:   Eixo onde será feito o recorte (0, 1 ou 2, eixos x, y e z
          respectivamente)
  at:     Posição no eixo onde será feito o recorte, pode ser um valor direto
          (e.g. 3.7), uma matriz de valores (e.g. [3.7, 5, 6.8]). Se não for
          informado, usará a metade dos extremos do objeto informado

Retorno
  matriz com cada um dos pedaços do objeto recortado

Exemplo
  // Cria metade de um cilindro, como a projeção de um semi círculo
  // Note que a função retorna dois objetos em um array, sendo descartado
  // o segundo objeto
  obj = split({
    obj: cylinder({r: 3, h: 4}),
    axis: 0
  })[0]

Funções extras
  Funções splitX, slpitY e splitZ, com o mesmo comportamento indicado para
  split, mas com o eixo já indicado no método para simplicidade

*/

const jscad = require("@jscad/modeling")
const { align } = require("./align.js")
const { cuboid } = jscad.primitives;
const { intersect, subtract } = jscad.booleans;
const { measureBoundingBox } = jscad.measurements

"use strict"

const split = (obj, { axis = null, at = null } = {}) => {

  if (axis != 'x' && axis != 'y' && axis != 'z')
    throw new TypeError("axis must be 'x', 'y' or 'z'")

  const index = axis == 'x' ? 0 : axis == 'y' ? 1 : 2


  const ob = measureBoundingBox(obj)
  const cube_size = [ob[1][0] - ob[0][0], ob[1][1] - ob[0][1], ob[1][2] - ob[0][2]]
  console.log(cube_size)

  // Não informado, usa metade da dimensão
  if (at == null)
    cube_size[index] = cube_size[index] / 2

  // Array com valores, usa o último e segue em loop nos outros
  // Está utilizando o último para não precisar ajustar as medidas de corte
  else if (Array.isArray(at)) {
    cube_size[index] = at.pop()
    // Valor direto
  } else
    cube_size[index] = at

  console.log(cube_size)

  const splitter = align(cuboid({ size: cube_size }), { ref: obj, begin: "xyz" })

  if (Array.isArray(at) && at.length >= 1) {
    return split(intersect(obj, splitter), { axis, at }).concat([subtract(obj, splitter)])
  } else
    return [intersect(obj, splitter), subtract(obj, splitter)]
}

module.exports = { split }    