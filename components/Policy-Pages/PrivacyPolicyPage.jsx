import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">
        Just Craig Development Ltd Privacy Policy
      </h1>
      <div className="flex flex-col mt-5">
        <Link href="#contact-details">1. Contact Details</Link>
        <Link href="#respect-your-privacy">2. How I Respect Your Privacy</Link>
        <Link href="#personal-info-collected-purposes">
          3. Personal Information I Collect & Purposes
        </Link>
        <Link href="#personal-info-used">
          4. How I Use Your Personal Information & When It May Be Required
        </Link>
        <Link href="#sharing-your-data">5. When I Share Your Data</Link>
        <Link href="#data-retention">6. Data Retention</Link>
        <Link href="#data-protection-rights">
          7. Your Data Protection Rights
        </Link>
        <Link href="#cookies-usage">8. Cookies & Usage Tracking</Link>
        <Link href="#privacy-policy-updates">
          9. Changes to This Privacy Policy
        </Link>
        <Link href="#complaints">10. How To Complain</Link>
      </div>
      <div className="mt-5">
        <div id="contact-details">
          <h1 className="font-bold text-xl">1. Contact Details</h1>
          <p>Company Name: Just Craig Development Ltd</p>
          <p>General Contact E-mail: contact@justcraigdev.com</p>
          <p>Privacy Complaint E-mail: privacy@justcraigdev.com</p>
          <p>Created: 22nd November 2023</p>
          <p>Last Updated: 31st January 2024</p>
        </div>
        <div id="respect-your-privacy" className="mt-5">
          <h1 className="font-bold text-xl">2. How I Respect Your Privacy</h1>
          <p>
            This Privacy Policy applies to information Just Craig Development Ltd collects about individuals who interact
            with me through my website. It explains what personal information I
            collect and how I use it.
          </p>
          <p className="mt-5">
            If you have any questions about this privacy policy, please feel
            free to contact me at privacy@justcraigdev.com.
          </p>
        </div>
        <div id="personal-info-collected-purposes" className="mt-5">
          <h1 className="font-bold text-xl">
            3. Personal Information I Collect & Purposes
          </h1>
          <p>
            The table below outlines the types of data I collect, and the legal
            basis, under current data protection legislation, for processing
            this data.
          </p>
          <table className="mt-5">
            <tr>
              <th>Purpose</th>
              <th className="pl-5">Data Collected</th>
              <th className="pl-5">Basis</th>
            </tr>
            <tr>
              <td>Submitting the Contact Form</td>
              <td className="pl-5">
                Name, Email, Phone Number (Optional), LinkedIn URL (Optional),
                Subject of Your Message and The Content of Your Message
              </td>
              <td className="pl-5">
                Consent: You provide this data voluntarily to ask a question or
                request information
              </td>
            </tr>
            <tr>
              <td>
                Submitting the Regular Commission Application Form (Commission
                Plans: &quot;Basic and Premium&quot;)
              </td>
              <td className="pl-5">
                Name, Email, Your Choice of Commission Plan &quot;Basic and Premium&quot; and The Reason for Your Commission Application
              </td>
              <td className="pl-5">
                Consent: You provide this data voluntarily to submit a
                commission application for either the Basic and Premium commission plans;<br />
                Contract: To undertake your requested commission, if your commission application has been accepted
              </td>
            </tr>
            <tr>
              <td>
                Submitting the Enterprise Commission Application Form
                (Commission Plans: &quot;Enterprise&quot;)
              </td>
              <td className="pl-5">
                Your Name, Your Businesses Name that you are applying for a
                commission on behalf of, Your Email, Your Business Email, Your
                Businesses LinkedIn Page that you are applying for a
                commission on behalf of, Your Choice of Commission Plan
                &quot;Enterprise&quot; and The Reason for Your Commission
                Application
              </td>
              <td className="pl-5">
                Consent: You provide this data voluntarily to submit a
                commission application for the Enterprise commission plan;<br />
                Contract: To undertake your requested commission, if your commission application has been accepted
              </td>
            </tr>
            <tr>
              <td>
                Handling Technical Issues, Feedback, Partnership Opportunities,
                and General Enquiries
              </td>
              <td className="pl-5">
                Name, Email, Phone Number (Optional), LinkedIn URL (Optional),
                Subject of Your Message and The Content of Your Message
              </td>
              <td className="pl-5">
                Consent: You provide this data voluntarily for the respective
                purposes
              </td>
            </tr>
          </table>
        </div>
        <div id="personal-info-used" className="mt-5">
          <h1 className="font-bold text-xl">
            4. How I Use Your Personal Information & When It May Be Required
          </h1>
          <p>
            I will only ever use your data for the appropriate purposes,
            respecting the basis on which your data was collected, as detailed
            in the table above.
          </p>
          <p className="mt-5">
            For example, I may use your personal information to:
          </p>
          <ul className="mt-2 list-disc ml-5">
            <li>Respond to enquiries you send;</li>
            <li>
              Respond to commission applications that you send (includes
              applications for all commission plans: &quot;Basic, Premium and Enterprise&quot;);
            </li>
            <li>
              To handle technical issues, feedback, partnership opportunities,
              and general enquiries;
            </li>
          </ul>
        </div>
        <div id="sharing-your-data" className="mt-5">
          <h1 className="font-bold text-xl">5. When I Share Your Data</h1>
          <p className="mt-5">
            I will only share your data with third parties under these
            conditions:
          </p>
          <ul className="mt-2 list-disc ml-5">
            <li>With your explicit consent;</li>
            <li>When required to share your data by law;</li>
          </ul>
          <p className="mt-5">
            In addition, I will only share your data with third parties outside
            of the EU where appropriate safeguards are defined by Article 46 of
            the General Data Protection Regulation (&quot;GDPR&quot;).
          </p>
        </div>
        <div id="data-retention" className="mt-5">
          <h1 className="font-bold text-xl">6. Data Retention</h1>
          <p>I take the principles of data minimisation and removal seriously and I will only ever ask for the minimum amount of data required for the associated purpose and delete that data promptly, once it is no longer required to be stored.</p>
          <p className="mt-5">Where your data is collected on the basis of:</p>
          <ul className="mt-2 list-disc ml-5">
            <li>Contract: 2 years for audit reasons;</li>
            <li>Consent: I will seek renewal of consent at least every 12 months.</li>
          </ul>
        </div>
        <div id="data-protection-rights" className="mt-5">
          <h1 className="font-bold text-xl">7. Your Data Protection Rights</h1>
          <p>For a comprehensive list of your legal rights over your data, visit the Information Commissioner&apos;s Office (&quot;ICO&quot;) Website: <a className="underline" href="https://www.ico.org.uk">https://www.ico.org.uk</a></p>
          <p>Under data protection law, you have rights including:</p>
          <ul className="mt-2 list-disc ml-5">
            <li>Where data processing is based on consent, you can revoke consent at any time by contacting me;</li>
            <li>Your right of access - You have the right to ask me for copies of your personal information;</li>
            <li>Your right to rectification - You have the right to ask me to rectify personal information you think is inaccurate. You also have the right to ask me to complete information you think is incomplete;</li>
            <li>Your right to erasure - You have the right to ask me to erase your personal information in certain circumstances;</li>
            <li>Your right to restriction of processing - You have the right to ask me to restrict the processing of your personal information in certain circumstances;</li>
            <li>Your right to data portability - You have the right to ask that I transfer the personal information you gave me to another organisation, or to you, in certain circumstances.</li>
          </ul>
          <p className="mt-5">Note: Exercising certain rights, such as data deletion, may prevent me from delivering certain services to you.</p>
          <p className="mt-5">You are not required to pay any charge for exercising your rights. If you make a request, I have one month to respond to you.</p>
          <p className="mt-5">You have the right to file a complaint with the Information Commissioner&apos;s Office (&quot;ICO&quot;) if you believe your rights have been violated. See <Link className="underline" href="#complaints">Section 10. How To Complain</Link> for more information and how to contact the Information Commissioner&apos;s Office (&quot;ICO&quot;).</p>
          <p className="mt-5">Please contact me at privacy@justcraigdev.com if you wish to make a request.</p>
        </div>
        <div id="cookies-usage" className="mt-5">
          <h1 className="font-bold text-xl">8. Cookies & Usage Tracking</h1>
          <p>A cookie is a small file of letters and numbers that is downloaded on to your computer when you visit a website. Cookies allow a website to recognise a user&apos;s device and store some information about the user&apos;s preferences.</p>
          <p className="mt-5">I use cookies primarily for website functionality and not for collecting personal data beyond the purposes outlined in section 3 above. Some cookies may gather anonymous usage data to improve website performance.</p>
        </div>
        <div id="privacy-policy-updates" className="mt-5">
          <h1 className="font-bold text-xl">
            9. Changes to This Privacy Policy
          </h1>
          <p>I may update this privacy policy occasionally and will publish the most current version of this privacy policy to my website. If an update to this privacy policy meaningfully reduces your rights, I will notify people whose personal data that I hold and is affected because of this update.</p>
        </div>
        <div id="complaints" className="mt-5">
          <h1 className="font-bold text-xl">10. How To Complain</h1>
          <p>If you have any concerns about my use of your personal information, you can make a complaint to me at privacy@justcraigdev.com.</p>
          <p className="mt-5">You can also complain to the ICO if you are unhappy with how I have used your data.</p>
          <p className="mt-5">The ICO&apos;s address:</p>
          <p>Information Commissioner&apos;s Office<br />
            Wycliffe House<br />
            Water Lane<br />
            Wilmslow<br />
            Cheshire<br />
            SK9 5AF
          </p>
          <p className="mt-5">Helpline number: 0303 123 1113</p>
          <p className="mt-5">ICO website: <a className="underline" href="https://www.ico.org.uk">https://www.ico.org.uk</a></p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
