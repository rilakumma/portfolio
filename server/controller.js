const nodemailer = require("nodemailer");

module.exports = {
  emailMessage: (req, res) => {
    const { date, name, email, message } = req.body;
    console.log(req.body);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `New Message Alert`,
      html: `<div><h1>New Message from ${name}</h1><h1>${email}</h1><h1 style='color: grey;'>${date}</h1><p style='font-size: 20px;'>${message}</p></div>`
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
        res.send();
      }
    });
  }
};
