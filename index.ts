//NOTE: THIS POC WONT WORK DIRECTLY.BECAUSE I JUST CHANGED MY ORIGINAL GMAIL WITH FAKE ONE. SO NO MESSAGE GONNA SEND
//DIRECTLY. USE YOUR OWN GMAIL BY CREATING .ENV FILE AND GO TO THE SECURITY SECTION OF YOUR GMAIL AND SET APP PASSWORD
//ON YOUR BACKEND. USE THIS CODE FOR REFERENCE. HAPPY CODING

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

