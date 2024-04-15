import { NextFunction, Request, Response } from "express";
type TryCatchHandler = (req: Request, res: Response) => Promise<Response>;

export function tryCatch(codeBlock: TryCatchHandler) {
    return async function (req: Request, res: Response,next:NextFunction) {
        try {
            await codeBlock(req, res);
        } catch (error:any) {
            console.error("An error occurred:", error);
            return res.status(500).json({status:"failure",
            message:error.message,
            ...(error.code? {errorCode:error.code}:{})})
            //errorcode:error.code,errorStack:error.stack
            // Handle errors here if needed
            // res.status(500).json({ error: "Internal Server Error" });
        }
    };
}