import express from "express";
import res from "express/lib/response";

const router = express.Router();

router.get('/', (req, res) => {
    res.send({data: []});
});


export default router;