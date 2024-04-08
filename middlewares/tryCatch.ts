import { NextFunction, Request, Response } from "express";
type TryCatchHandler = (req: Request, res: Response) => Promise<Response>;

export function tryCatch(codeBlock: TryCatchHandler) {
    return async function (req: Request, res: Response,next:NextFunction) {
        try {
            await codeBlock(req, res);
        } catch (error) {
            next();
            // Handle errors here if needed
            console.error("An error occurred:", error);
            // res.status(500).json({ error: "Internal Server Error" });
        }
    };
}