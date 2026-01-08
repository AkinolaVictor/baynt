const nodemailer = require('nodemailer');

export default async function sendEmail(req, res){
    const {userEmail, subject, html} = req.body
    
    // console.log({userEmail, subject, em: process.env.NEXT_PUBLIC_USEMAIL});
    // return res.send({successful: true})
    
    let transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: { 
            user: process.env.NEXT_PUBLIC_USEMAIL,
            pass: process.env.NEXT_PUBLIC_USEPASS  // USED APP PASSWORD
        },
        // requireTLS: true,
        connectionTimeout: 10000,
        
        // tls: {
        //     rejectUnauthorized: false
        // }
    })

    try {
        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_USEMAIL,
            to: userEmail,
            subject,
            html
        }).then((resp)=>{
            console.log("finally done");
            res.send({successful: true})
        }).catch((e)=>{
            console.log("err", e);
            res.send({successful: false})
        })
    } catch (e){
        console.log("failed", e);
        res.send({successful: false, error: true})
    }
}
