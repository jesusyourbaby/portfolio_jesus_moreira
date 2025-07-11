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
    from: `"Notificaciones Portfolio" <${process.env.EMAIL}>`, // Fijo, pero claro
    to: process.env.EMAIL,
    replyTo: `"${name}" <${email}>`, // Contacto real aquí
    subject: `📩 Mensaje de ${name} desde el Portfolio`,
    html: `
        <h2>Nuevo mensaje desde el Portfolio</h2>
        <p><strong>⚠️ ATENCIÓN:</strong> Este mensaje fue enviado por un visitante.</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email real:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a></p>
        <p><strong>Mensaje:</strong></p>
        <div style="background: #f3f4f6; padding: 12px; border-radius: 8px;">${message.replace(/\n/g, '<br>')}</div>
        <p style="margin-top: 16px; color: #6b7280;">Haz clic en "Responder" para contactar al remitente original.</p>
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

app.get('/', (req, res) => {
  res.redirect('https://portfolioprojectjesusmoreira.netlify.app');
});

app.listen(3001, () => console.log('Servidor listo en http://localhost:3001'));