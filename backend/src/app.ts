import express from "express";
import cors from "cors";

import { type Response } from "express";

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.FRONTEND_URL,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_req, res: Response) => {
    res.send("Backend")
})
app.listen(PORT,(error) => {
    if (error) throw error;
    console.log(`Express Server listening on port ${PORT}`)
})