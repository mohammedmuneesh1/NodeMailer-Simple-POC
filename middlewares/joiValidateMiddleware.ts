import { Schema } from "joi"
import { Request,Response,NextFunction } from "express"
export  function joiValidation(schema:Schema){
    return async function (req:Request,res:Response,next:NextFunction){
        try {
            const data = await schema.validateAsync(req.body)
            req.body=data;
            next();
        } catch (error) {
            return res.status(400).json({ status: "Failure", message:error});
        }
    }
}