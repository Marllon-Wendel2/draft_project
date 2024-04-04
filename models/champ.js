import champ from "./class.js";

const listaDeChampeoes = []

const aatrox = new champ ('Aatrox', 'Lutador', 'colosso', 'Carry');
const ahri = new champ ('Ahri', 'Mago', 'controle', 'Carry');
const leeSin = new champ ('Lee Sin', 'Lutador', 'investida', 'Ferramenta');
const ezreal = new champ ('Ezreal', 'Atirador', 'Casther', 'Carry');
const leona = new champ ('Leona', 'Tanque', 'vanguarda', 'Ferramenta');
const gwen = new champ ('Gwen', 'Retaliador', 'duelista', 'Carry');
const viego = new champ ('Viego', 'Retaliador', 'duelista', 'Carry');
const leblanc = new champ ('LeBlanc', 'Mago', 'assassino', 'Carry');
const tristana = new champ ('Tristana', 'Atirador', 'DPS', 'Carry');
const yummi = new champ ('Yummi', 'Mago', 'encantador', 'Ferramenta');

listaDeChampeoes.push(aatrox, ahri, leeSin, ezreal, leona, gwen, viego, leblanc, tristana, yummi);
export default listaDeChampeoes
console.log(listaDeChampeoes);
