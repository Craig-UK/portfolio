import nodemailer from 'nodemailer'
import { google } from 'googleapis'
import { NextResponse } from 'next/server'

export async function POST (request) {
  const { name, email, phone, linkedin, message } = await request.json()
  const OAuth2 = google.auth.OAuth2

  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REQUEST_URI
    )
    try {
      oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
      })
    } catch (e) {
      console.error('Error occurred while setting OAuth2 Credentials - In Contact API.', e)
    }

    const accessToken = await oauth2Client.getAccessToken()

    try {
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
    } catch (e) {
      console.error('Error creating transport - In Contact API.', e)
    }
  }

  const sendEmail = async (emailOptions) => {
    const emailTransporter = await createTransporter()
    await emailTransporter.sendMail(emailOptions)
  }

  try {
    await sendEmail({
      subject: 'From: ' + name + '\nEmail: ' + email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nLinkedIn: ${linkedin}\nMessage: ${message}`,
      to: process.env.EMAIL,
      from: `${name} - Portfolio Contact <${process.env.EMAIL}>`
    })
  } catch (e) {
    console.error('Error sending email - In Contact API.', e)
  }

  return NextResponse.json({ sendEmail })
}
