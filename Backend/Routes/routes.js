import express from "express";
const Router = express.Router();
import form  from "../controller/form.js"
import show  from "../controller/show.js"

Router.post("/form",form);
Router.get("/show",show);

export default Router;