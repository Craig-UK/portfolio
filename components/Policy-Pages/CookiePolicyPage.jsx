import Link from "next/link";
import React from "react";

const CookiePolicyPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Cookies Policy</h1>
      <p>
        This cookies policy explains the cookies that Just Craig Development Ltd use on this website.
      </p>
      <section className="flex flex-col mt-5">
        <Link href="#what-are-cookies">What are cookies?</Link>
        <Link href="#what-cookies-do-i-use">What cookies do I use?</Link>
        <Link href="#strictly-necessary-cookies">
          Strictly Necessary Cookies
        </Link>
        <Link href="#how-to-manage-cookies">How to manage cookies</Link>
      </section>
      <section id="what-are-cookies" className="mt-5">
        <h1 className="font-bold text-xl">What are cookies?</h1>
        <p>
          Cookies are small text files that are placed on your computer by
          websites that you visit. They are widely used in order to make
          websites work, or work more efficiently, as well as to provide
          information to the owners of the site. The table below explains the
          cookies I use and why.
        </p>
        <p className="mt-5">
          Cookies cannot harm your computer. They play an important role in
          helping us understand how to improve the website to suit your needs.
          Without them, using the web would be a much more frustrating
          experience.
        </p>
        <p className="mt-5">
          I use cookies on this site to enable some of the functionality of my
          website.
        </p>
      </section>
      <section id="what-cookies-do-i-use" className="mt-5">
        <h1 className="font-bold text-xl">What cookies do I use?</h1>
        <p>
          The list below sets out the main cookies that I use on this site and
          what I use them for.
        </p>
      </section>
      <div id="strictly-necessary-cookies" className="mt-2">
        <h1 className="font-bold text-xl">Strictly Necessary Cookies</h1>
        <p>
          Strictly necessary cookies enable core functionality such as security,
          network management, and accessibility. These cookies make the website
          work and deliver services that you&apos;d expect, like navigating
          around web pages or accessing secure areas of the website. Without
          these cookies, the website cannot function properly.
        </p>
        <p>
          You may disable these by changing your browser settings (see{" "}
          <Link href="#how-to-manage-cookies">
            here for how to manage cookies
          </Link>
          ), but this may affect how the website functions. The list below sets
          out the main cookies that I use on my website and what I use them for
          in the Strictly Necessary category.
        </p>
        <table className="mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th className="pl-5">Cookie</th>
              <th className="pl-5">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cloudflare Cookie Clearance</td>
              <td className="pl-5">cf_clearance</td>
              <td className="pl-5">
                This cookie stores the proof of challenge passed. It is used to
                no longer issue a challenge if present. It is required to reach
                an origin server. This cookie is issued by Cloudflare as
                Cloudflare is being used on this website.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <section id="how-to-manage-cookies" className="mt-2">
        <h1 className="font-bold text-xl">How to manage cookies</h1>
        <p>
          Most web browsers allow some control of most cookies through the
          browser settings. To find out more about cookies, including how to see
          what cookies have been set, visit{" "}
          <a className="hover:underline text-blue-600" href="https://www.aboutcookies.org" target="_blank">www.aboutcookies.org</a> or
          <a className="hover:underline text-blue-600" href="https://www.allaboutcookies.org" target="_blank"> www.allaboutcookies.org</a>.
        </p>
        <p className="mt-5">
          Find out how to manage cookies on popular browsers:
        </p>
        <ul className="flex flex-col list-disc ml-6 mt-2 gap-2 underline text-blue-600">
          <li>
            <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=en">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy">
              Microsoft Edge
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">
              Microsoft Internet Explorer
            </a>
          </li>
          <li>
            <a href="https://www.opera.com/help/tutorials/security/privacy/">
              Opera
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/en-gb/safari">Apple Safari</a>
          </li>
        </ul>
        <p className="mt-5">
          To find information relating to other browsers, visit the browser
          developer&apos;s website.
        </p>
      </section>
    </>
  );
};

export default CookiePolicyPage;
