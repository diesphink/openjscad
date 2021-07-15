const x = 0;
const y = 1;
const z = 2;

const dim = {};

dim.caixa = {
  size: [130, 70, 35],
  paredes: [2, 2, 7],
  innerRadius: 1,
  outerRadius: 2,
};

dim.tomada = {
  superior: [43.5, 19, 24],
  inferior: [35.4, 23, 21],
  buraco: [37, dim.caixa.paredes[y], 24],
  paredes: [6, 0, 0],
};

dim.dupont3 = {
  base: [17, 14, 20],
  conector_macho: [10, 8, 7.4],
  conector_femea: [8, 12, 6],
  buraco: [11, 14, 9],
  asa_menor: [13, 3, 5],
  asa_maior: [20, 10, 5],
  ranhura_vertical: [4, 14, 5],
};

dim.c110v = {
  size: [20, 10, 13],
  espacamento: 26,
};

dim.relay = {
  placa: [26, 33.7, 8],
  buraco: [10, 10, 5],
  posicao_buraco: [5, 33.7, null],
  espaco_buraco: 1.9,
};
dim.relay.posicao_buraco[z] = dim.relay.placa[z] + 3;

dim.interruptor = {
  size: [14, dim.caixa.paredes[y], 8.5],
};

dim.terminal = {
  terminal: [8, 24, 10], 
  suporte: [5, 24, 17],
  espaco_entre_suportes: 2,
  recuo: 14,
  slot_ziptie: [6, 5, 2],
  espaco_ziptie_superior: 2,
  radius_buraco: 3.5
}

module.exports = { dim };
 