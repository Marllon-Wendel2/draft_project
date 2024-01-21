import listaDeChampeoes from "./champ.js";
import readlineSync from "readline-sync"

const compAzul = [];
const compVermelho = [];




//const readlineSync = require('readline-sync');

function selecionaChamp(comp) {
   
    let selecaoDeCampeao = readlineSync.question("Selecione um campeao");
    let indexDoCampeao = Number.parseInt(listaDeChampeoes.findIndex(campeao => campeao.nome === selecaoDeCampeao));
    let campeaoSelecionado = listaDeChampeoes[indexDoCampeao];
    comp.push(campeaoSelecionado)


    console.log(campeaoSelecionado);
}
let i = 0
 while(i <= 9){
    const usarCompAzul = [0, 3, 4, 7, 8]
    if(usarCompAzul.includes(i)) {
        console.log(i)
        selecionaChamp(compAzul);
        i++
        console.log(i)
    } else {
        selecionaChamp(compVermelho);
        i++
        }
    }

console.log(compAzul);
console.log(compVermelho);