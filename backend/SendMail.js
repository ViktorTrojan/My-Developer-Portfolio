const nodemailer = require("nodemailer");
const cfg = require('./config.json');

async function sendMail(mail, subject, msg) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: cfg.mailuser,
      pass: cfg.gmailapppass,
    },
  });

  {
    let info = await transporter.sendMail({
      from: `"${mail}" <foo@example.com>`, // sender address
      to: cfg.mailuser, // list of receivers
      subject: subject, // Subject line
      text: msg, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
  }
}

module.exports = {sendMail};