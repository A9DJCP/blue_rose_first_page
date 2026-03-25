import { Router } from "express";

const router = Router();
// Ruta GET principal

router.get("/", (_, res) => {
    res.render("home");
});

router.get("/app/v0/login", (_, res) => {
    res.render("login");
});



export default router;