import campeao from "../models/Campeao.js"

class ChampController {
    
    static async  listarCampaos(req, res) {
       
       try {
        const listaDeChamp = await campeao.find({});
        res.status(200).json(listaDeChamp)
    } catch (erro) {
        res.status(erro).json({mensagem: "Erro na lista"})
    }
}
}

export default ChampController;