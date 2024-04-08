import { sendMailData } from "../types/type";
import NodeMailer from "nodemailer"

export async function sendMail(mailData:sendMailData){

    const mailer = NodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASS,
        },
      });

      const mailInfo =  await mailer.sendMail({
        from: "mohammedmuneesh1@gmail.com",
        to: mailData.recipientMail,
        subject:mailData.subject,
        text:"hello this is the text section",
        ...(mailData.html ? { html: mailData.html } : {}), // Include html if present
        ...(mailData.attachments ? { attachments: mailData.attachments } : {}) // Include attachments if present
    
      });
      // console.log(mailInfo)

}