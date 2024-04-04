import express from "express";
import ChampController from "../controllers/champController.js";

const routes = express.Router();

routes.get("/champlist", ChampController.listarCampaos);

export default routes;