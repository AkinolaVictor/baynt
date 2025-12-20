const nodemailer = require('nodemailer');

export default async function sendEmail(req, res){
    const {userEmail, subject, html} = req.body
    
    // console.log({userEmail, em: process.env.NEXT_PUBLIC_USEMAIL, ps: process.env.NEXT_PUBLIC_USEPASS});
    // return res.send({successful: true})
    
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.NEXT_PUBLIC_USEMAIL,
            pass: process.env.NEXT_PUBLIC_USEPASS
        }
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
