"use strict";
const nodemailer = require("nodemailer");

const email_from = 'fullstack8k2@gmail.com';
const content_email_from = 'fullstack8k2@gmail.com';
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: email_from,
    // pass: "iqzv exik ymgo zvje",
    pass: "cjwa qgxy pwwl gqaz",

  },
});

const sendMail = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: `${subject} <${content_email_from}>`, // sender address
    to,
    subject,
    html: message, // html body
  });
  return info;
};
module.exports = sendMail;
