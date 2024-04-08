export type sendMailData = {
    recipientMail:string,
    subject:string,
    text:string,
    html?:string,
    attachments?:Attachment[]
}

type Attachment = {
    filename: string,
    path: string // Path to the file
}