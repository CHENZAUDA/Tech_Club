const nodemailer = require("nodemailer");
const { EMAIL_API, EMAIL_ADDRESS } = process.env;

const SendEmails = (req, res) => {
    const { email, password } = req.body;
    const output = `
      <h3> ברוך/ה הבא/ה ל Tech-Club </h3>
      <h4>להלן פרטי התתחברות למועדון טק קריירה </h4>
      <ul>  
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


 //EMAIL_ADDRESS = techcareerproject@gmail.com//