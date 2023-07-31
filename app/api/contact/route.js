import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  const OAuth2 = google.auth.OAuth2;

  const CONTACT_MESSAGE_FIELDS = {
    name: "Name",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    message: "Message",
  };

  const generateEmailContent = (data) => {
    const stringData = Object.entries(data).reduce(
      (str, [key, val]) =>
        (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
      ""
    );

    const htmlData = Object.entries(data).reduce(
      (str, [key, val]) =>
        (str += `<h1 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h1><p class="form-answer" align="left">${val}</p>`),
      ""
    );

    return {
      text: stringData,
      html: `<!DOCTYPE html>
      <html>
        <head>
          <title></title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <style type="text/css">
            body,
            table,
            td,
            a {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table {
              border-collapse: collapse !important;
            }
            body {
              height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
            }
            @media screen and (max-width: 525px) {
              .wrapper {
                width: 100% !important;
                max-width: 100% !important;
              }
              .responsive-table {
                width: 100% !important;
              }
              .padding {
                padding: 10px 5% 15px 5% !important;
              }
              .section-padding {
                padding: 0 15px 50px 15px !important;
              }
            }
            .form-container {
              margin-bottom: 24px;
              padding: 20px;
              border: 1px dashed #ccc;
            }
            .form-heading {
              color: #2a2a2a;
              font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
              font-weight: 400;
              text-align: left;
              line-height: 20px;
              font-size: 18px;
              margin: 0 0 8px;
              padding: 0;
            }
            .form-answer {
              color: #2a2a2a;
              font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
              font-weight: 300;
              text-align: left;
              line-height: 20px;
              font-size: 16px;
              margin: 0 0 24px;
              padding: 0;
            }
            div[style*="margin: 16px 0;"] {
              margin: 0 !important;
            }
          </style>
        </head>
        <body style="margin: 0 !important; padding: 0 !important; background: #fff">
          <div
            style="
              display: none;
              font-size: 1px;
              color: #fefefe;
              line-height: 1px;
              max-height: 0px;
              max-width: 0px;
              opacity: 0;
              overflow: hidden;
            "
          ></div>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td
                bgcolor="#ffffff"
                align="center"
                style="padding: 10px 15px 30px 15px"
                class="section-padding"
              >
                <table
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  width="100%"
                  style="max-width: 500px"
                  class="responsive-table"
                >
                  <tr>
                    <td>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td>
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tr>
                                <td
                                  style="
                                    padding: 0 0 0 0;
                                    font-size: 16px;
                                    line-height: 25px;
                                    color: #232323;
                                  "
                                  class="padding message-content"
                                >
                                  <h2>New Contact Message</h2>
                                  <div class="form-container">${htmlData}</div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>`,
    };
  };

  const generateNoReplyEmailContent = (data) => {
    const stringData = `Thank you for contacting me, ${data.email}. I will get back to you about your email as soon as possible. I will email you back on ${data.email}. Please feel free to have a look at my projects, github or have a read of one of my blog posts while you wait on my email. If the email address listed above is incorrect then send an email to contact@justcraigdev.com.`;

    const htmlData = `Thank you for contacting me, ${data.email}. I will get back to you about your email as soon as possible. I will email you back on ${data.email}. Please feel free to have a look at my projects, github or have a read of one of my blog posts while you wait on my email. If the email address listed above is incorrect then send an email to contact@justcraigdev.com.`

    return {
      text: stringData,
      html: `<!DOCTYPE html>
      <html>
        <head>
          <title></title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <style type="text/css">
            body,
            table,
            td,
            a {
              -webkit-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            table {
              border-collapse: collapse !important;
            }
            body {
              height: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
              width: 100% !important;
            }
            @media screen and (max-width: 525px) {
              .wrapper {
                width: 100% !important;
                max-width: 100% !important;
              }
              .responsive-table {
                width: 100% !important;
              }
              .padding {
                padding: 10px 5% 15px 5% !important;
              }
              .section-padding {
                padding: 0 15px 50px 15px !important;
              }
            }
            .form-container {
              margin-bottom: 24px;
              padding: 20px;
              border: 1px dashed #ccc;
            }
            .form-heading {
              color: #2a2a2a;
              font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
              font-weight: 400;
              text-align: left;
              line-height: 20px;
              font-size: 18px;
              margin: 0 0 8px;
              padding: 0;
            }
            .form-answer {
              color: #2a2a2a;
              font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
              font-weight: 300;
              text-align: left;
              line-height: 20px;
              font-size: 16px;
              margin: 0 0 24px;
              padding: 0;
            }
            div[style*="margin: 16px 0;"] {
              margin: 0 !important;
            }
          </style>
        </head>
        <body style="margin: 0 !important; padding: 0 !important; background: #fff">
          <div
            style="
              display: none;
              font-size: 1px;
              color: #fefefe;
              line-height: 1px;
              max-height: 0px;
              max-width: 0px;
              opacity: 0;
              overflow: hidden;
            "
          ></div>
            <h2>Thank you for contacting me</h2>
            <div class="form-container">${htmlData}</div>
        </body>
      </html>`,
    };
  };

  if (!data.name || !data.email || !data.message) {
    return NextResponse.json({
      status: 400,
      message: "No name, email or message provided.",
    });
  }

  const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REQUEST_URI
    );
    try {
      oauth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN,
      });
    } catch (e) {
      return NextResponse.json({
        status: 401,
        message: "Something went wrong while setting credentials.",
      });
    }

    const accessToken = await oauth2Client.getAccessToken();

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: process.env.CONTACT_EMAIL,
          accessToken,
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
        },
      });

      return transporter;
    } catch (e) {
      return NextResponse.json({
        status: 403,
        message: "Something went wrong while creating the email.",
      });
    }
  };

  const sendEmail = async (emailOptions) => {
    const emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
  };

  try {
    await sendEmail({
      ...generateEmailContent(data),
      subject: "From: " + data.name + "\nEmail: " + data.email,
      replyTo: process.env.REPLY_TO_EMAIL,
      to: process.env.EMAIL,
      from: `${data.name} - Portfolio Contact <${process.env.REPLY_TO_EMAIL}>`,
    });

    await sendEmail({
      ...generateNoReplyEmailContent(data),
      subject: "From: " + data.name + "\nEmail: " + data.email,
      replyTo: process.env.REPLY_TO_EMAIL,
      to: data.email,
      from: `${data.name} - Portfolio Contact <${process.env.NOREPLY_EMAIL}>`,
    });

    return NextResponse.json({
      status: 200,
      message: "Success",
      success: true,
    });
  } catch (e) {
    return NextResponse.json({
      status: 403,
      message: "Something went wrong while sending the email.",
    });
  }
}
