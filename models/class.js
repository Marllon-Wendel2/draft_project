export default class champ {
    constructor(nome, classe, subClasse, funcao) {
        this.nome = nome
        this.classe = classe
        this.subClasse = subClasse
        this.funcao = funcao
    }
    lockChamp(){
        return `O campeão ${this.nome} foi selecionado`
    }
    exibirDicas(array){
        return `Se atente a ${array}`
    }
}