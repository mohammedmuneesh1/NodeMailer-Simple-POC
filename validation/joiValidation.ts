
import Joi, { string } from "joi";
export const gmailValidate=Joi.object({
    recipientMail:Joi.string().email({ minDomainSegments: 2 }).regex(/@gmail\.com$/).messages({
        'string.pattern.base': 'Recipient email must be a valid Gmail address ending with "@gmail.com"',
    }).required(),
    subject:Joi.string().min(4).max(200).messages({
        'string.base':'Subject must be a string',
        'string.empty':'Subject cannot be empty',
        'string.min':'Subject must have at least 2 characters',
        'string.max':'Subject cannot exceed 1500 characters',
        'any.required':'subject is required'
    }).required(),
    text:Joi.string().min(4).max(15000).required(),
    html:Joi.string().min(8).max(15000).messages({
        'string.base': 'HTML must be a string',
        'string.empty': 'HTML cannot be empty',
        'string.min': 'HTML must have at least 8 characters',
        'string.max': 'HTML cannot exceed 15000 characters',
    }),
    attachments:Joi.array().items(Joi.object({
        path:Joi.string().required(),
        pathurl:Joi.string().required(),
    }))
})