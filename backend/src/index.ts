import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log("Conexión a la base de datos exitosa!"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("api/my/user", myUserRoute);

app.listen(2002, () => {
    console.log("servidor encendido en el puerto localhost:2002");
});