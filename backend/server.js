require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración mejorada del transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false // Solo para desarrollo
  }
});

// Ruta con mejor manejo de errores
app.post('/send-email', async (req, res) => {
  console.log("Recibiendo datos:", req.body);
  
  try {
    const { name, email, message } = req.body;

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).send('Faltan campos requeridos');
    }

    const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL}>`,  // Email fijo (tu dominio)
    to: process.env.EMAIL,
    replyTo: `"${name}" <${email}>`,  // Email del contacto
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
    `
    };

    console.log("Enviando correo...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.messageId);
    
    res.status(200).send('Correo enviado con éxito');
  } catch (error) {
    console.error("Error completo:", error);
    res.status(500).send(`Error al enviar: ${error.message}`);
  }
});

app.listen(3001, () => console.log('Servidor listo en http://localhost:3001'));