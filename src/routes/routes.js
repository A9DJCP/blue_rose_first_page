import { Router } from "express";

const router = Router();
// Ruta GET principal
/*
router.get("/", (_, res) => {
    res.render("login");
});
*/
router.get("/", (_, res) => {
    console.log("HOLA");
    res.send("OK");
});


export default router;