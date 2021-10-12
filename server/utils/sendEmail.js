const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { EMAIL_API, EMAIL_ADDRESS } = process.env;

const adminVerified = () => {
    bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, async (err, hash) => {
            if (err) throw err;
            const password =  req.body.password
            password= Math.random(Math.floor()*8);
            password = hash;

            const { firstName, lastName, phone, userName, password } = req.body;
            const output = `
    <h3>היי אדמין יקר </h3>
    <h4>נא אשר משתמש חדש באתר בשם:${firstName},${lastName}  </h4>
    <h5> ${phone}</5>
    <h5> <button>אישור</button> <button>ביטול</button></5>
    <ul>  
      <li>user name: ${userName}</li>
      <li>password: ${password}</li>
    </ul>
    <h3>!שים לב </h3>
    <h3> אינך יכול לשלוח מייל בחזרה למשתמש זה</h3>
  `;
            const transporter = nodemailer.createTransport({
                service: "gmail",
                host: 'smtp.gmail.com',
                auth: {
                    user: EMAIL_ADDRESS,
                    pass: EMAIL_API,
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            const options = {
                from: `"Tech_Career" ${EMAIL_ADDRESS}`,
                to: `${email}`,
                subject: "Tech_Some_Help Club",
                text: "שלום רב",
                html: output,
            };
            try {
                transporter.sendMail(options, (error, info) => {
                    if (error) throw error
                    console.log("Message sent: %s", info.messageId);
                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
                    res.send("success");
                });
            } catch (error) {
                res.send("filed" + error.message);
            }
        })
    
    })
}


const SendEmails = (req, res) => {
        const { email, userName, password } = req.body;
        const output = `
      <h3> ברוכה הבאה לטק קריירה ${firstName} ${lastName} </h3>
      <h4>להלן פרטי התתחברות לאתר הלימודים של טק קריירה </h4>
      <ul>  
        <li>user name: ${userName}</li>
        <li>password: ${password}</li>
      </ul>
      <h3>!שים לב </h3>
      <h3> אינך יכול לשלוח מייל בחזרה למשתמש זה</h3>
    `;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: 'smtp.gmail.com',
            auth: {
                user: EMAIL_ADDRESS,
                pass: EMAIL_API,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const options = {
            from: `"Tech_Career" ${EMAIL_ADDRESS}`,
            to: `${email}`,
            subject: "Tech_Career Request",
            text: "שלום רב",
            html: output,
        };


        try {
            transporter.sendMail(options, (error, info) => {
                if (error) throw error
                console.log("Message sent: %s", info.messageId);
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

                res.send("success");
            });
        } catch (error) {
            res.send("filed" + error.message);
        }
    };

    module.exports = {
        SendEmails,
    };


    //EMAIL_ADDRESS = techcareerproject@gmail.com
