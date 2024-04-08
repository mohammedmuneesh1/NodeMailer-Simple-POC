import { error } from "console";
import { Request, Response } from "express";
import NodeMailer from "nodemailer";
import { sendMail } from "../utils/sendMail";
import { sendMailData } from "../types/type";


export async function simpleNodeMailer(
  req: Request,
  res: Response
): Promise<Response> {
    const obj:sendMailData =req.body;
    await sendMail(obj);
  return res.status(200).json({message:"simple mail has been sent to given mail. please check it."})
}

