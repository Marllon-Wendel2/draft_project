import express  from "express";
import campeao from "./champRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("DRAFT LOL"));
    app.use(express.json(), campeao);
};

export default routes;