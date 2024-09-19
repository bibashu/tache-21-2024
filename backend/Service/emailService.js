// services/emailService.js

const nodemailer = require('nodemailer');
require('dotenv').config();

// Créez un transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // ou 'hotmail', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Pour éviter les erreurs de certificat auto-signé
  }
});

// Fonction pour envoyer un email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
  }
};

module.exports = {
  sendEmail,
};
