import nodemailer from "nodemailer";
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  const OAuth2 = google.auth.OAuth2;

  const CONTACT_MESSAGE_FIELDS = {
    uniqueNumber: "Unique Number",
    name: "Name",
    email: "Email",
    commissionPlan: "Commission Plan",
    message: "Message",
    agreedToPrivacyPolicyAndTerms: "Agreed to privacy policy and terms and conditions",
  };

  const generateNoReplyEmailContent = (data) => {
    const stringData = `Thank you for your commission application for the ${data.commissionPlan} plan, ${data.name}. Please watch out for an email from sales@justcraigdev.com regarding your commission application stating whether or not your commission application has been accepted or rejected. Please feel free to have a look at my projects, github or have a read of one of my blog posts while you wait on my email. If the email address listed above is incorrect then send an email to contact@justcraigdev.com stating your unique Commission Application number in the subject line.`;

    const htmlDetailsData = Object.entries(data).reduce(
      (str, [key, val]) =>
        (str += `<h1 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h1><p class="form-answer" align="left">${val}</p>`),
      ""
    );

    const htmlData = `Thank you for your commission application for the ${data.commissionPlan} plan, ${data.name}. Please watch out for an email from sales@justcraigdev.com regarding your commission application stating whether your commission application has been accepted or rejected. Please feel free to have a look at my <a href="https://justcraigdev.com/projects">projects</a>, <a href="https://github.com/Craig-UK">github</a> or have a read of one of my <a href="https://justcraigdev.com/travelblog">Travel</a> or <a href="https://justcraigdev.com/devblog">Dev</a> blog posts while you wait on my email. If the email address listed above is incorrect then send an email to contact@justcraigdev.com stating your unique Commission Application number in the subject line.`

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
                                    <h2>Thank you for your Commission Application</h2>
                                    <div class="form-container">
                                        <h2>The details you entered into the commission application form</h2>
                                      ${htmlDetailsData}
                                    </div>
                                    <div class="form-container">
                                      ${htmlData}
                                    </div>
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
            <footer>
              noreply@justcraigdev.com is an unmonitored email. Emails sent to the noreply@justcraigdev.com email address will not be seen. Reply to sales@justcraigdev.com instead. <br />
              Website: https://www.justcraigdev.com <br />
              Enquiries/contact: contact@justcraigdev.com <br />
              ------------------------------------------------------------------------------------------------------ <br />
              Just Craig Development Ltd is a company registered in Scotland with company number SC797157. <br /> <br />
              
              Confidential information may be included within this message, if you are not the legally intended addressee(s) included within this message (or if you are not responsible for the delivery of this message to such person), you may not copy, forward or deliver this message to anyone. In such a case, you should destroy/delete this message and notify me immediately. <br /> <br />
              
              Please Note: Despite using the latest virus protection software, neither my employer nor I accept any responsibility for viruses and it is your responsibility to scan any attachments included within this message (if any).
            </footer>
          </body>
        </html>`,
    };
  };

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
      ...generateNoReplyEmailContent(data),
      subject: "Thank you for your commission application!",
      replyTo: process.env.SALES_EMAIL,
      to: data.email,
      from: `JustCraigDev Commission Application <${process.env.NOREPLY_EMAIL}>`,
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