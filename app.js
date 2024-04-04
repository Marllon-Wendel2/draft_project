import express from "express";
import { conectaDataBase } from "./db/dbConnect.js"
import routes from "./routes/index.js";

const conexao =  await conectaDataBase();

conexao.on("error", (erro) => {
    console.log("Erro na conexão", erro)
});

conexao.once("open", () => {
    console.log("Conexão realizada com sucesso");
});

const app = express();

routes(app);

app.get()

export default app;



