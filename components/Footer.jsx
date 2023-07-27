import Link from "next/link"

import { footerLinks } from "@constants/Constants"

const Footer = () => {
  return (
    <footer className='flex flex-col w-full text-black-100 mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        <p className='text-base text-gray-700 font-bold'>
          2023 Craig Climie - Developer <br />
          All rights reserved &copy; <br />
          <Link href={'/'}>Just Craig Development 2023</Link> <br />
          All rights reserved &copy;
        </p>
        <p className="font-semibold text-gray-700">
          <a href='mailto:contact@justcraigdev.com' className="hover:underline">Contact Me through email by clicking here</a>
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                  target={link.target !== "" ? link.target : link.url}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between items-center flex-wrap mt-10 border-t border gray-100 sm:px-16 px-6 py-10">
      <p>&copy; 2023 Just Craig Development. All rights reserved.</p>

      <div className="footer__copyrights-link">
        <Link href='/' className="text-gray-500">
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer