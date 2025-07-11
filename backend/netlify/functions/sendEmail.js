const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `Nuevo mensaje de ${name}`,
      html: `<p>Mensaje: ${message}</p>`
    });
    return { statusCode: 200, body: "Email sent" };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};