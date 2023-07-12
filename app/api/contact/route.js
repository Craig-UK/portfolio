import nodemailer from "nodemailer"
import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function POST (request) {
  const { name, email, phone, linkedin, message } = await request.json()
  const OAuth2 = google.auth.OAuth2

  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        process.env.REQUEST_URI
    );
    
    oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    });

    const accessToken = await new Promise((resolve, reject) => {
        oauth2Client.getAccessToken((err, token) => {
            if(err) {
                reject('Failed to create access token');
            }
            resolve(token);
        })
    })

   const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    })

    return transporter
  }

  const sendEmail = async (emailOptions) => {
    const emailTransporter = await createTransporter()
    await emailTransporter.sendMail(emailOptions)
  }

  sendEmail({
    subject: 'From: ' + name + '\nEmail: ' + email,
    text: message + '\n' + phone + '\n' + linkedin,
    to: process.env.EMAIL,
    from: process.env.EMAIL
  })
  return NextResponse.json({ sendEmail })
}
