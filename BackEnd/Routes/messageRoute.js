import express from "express";
import {ContactModel} from "../Models/messageModel.js";
import nodemailer from "nodemailer";

const contactRouter = express.Router();

contactRouter.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save contact to DB
    const contact = new ContactModel({ name, email, message });
    await contact.save();

    // Send email
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
      auth: {
        user: process.env.EMAIL_USER,      
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,           // Where you want to receive the message
      subject: `New Contact Message from ${name}`,
      text: `You have received a new message from your website:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Message received and email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default contactRouter;
