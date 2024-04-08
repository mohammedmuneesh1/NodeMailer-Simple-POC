import dotenv from "dotenv";
dotenv.config();
import express, { Express } from "express";
const app: Express = express();
import { router } from "./routes/userRouter";

app.use(express.json());
app.use('/user/',router);
app.listen(4000,()=>{
    console.log("server is running at 4000");
});

