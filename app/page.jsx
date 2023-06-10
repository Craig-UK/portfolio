import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section className='w-full flex-start flex-row'>
      <Image
          src={'/assets/images/portrait.jpg'}
          alt='Portrait'
          width={120}
          height={120}
          className='rounded-full pt-4'
        />
      <p className='desc'>
        Hello there! My name is Craig and I aspire to be a software/web developer! My favourite coding languages include JavaScript (specifically React), Python and Java. I 
        am really passionate about Technology and have been passionate about the Tech industry since I first played the Xbox 360 around a decade ago. My 
        favourite games include God of War, Minecraft, and more! Thank you for visiting my portfolio, please feel free to contact me if you have any issues with 
        my website or if you would like to learn more about me!
      </p>
    </section>
  );
};

export default Home;
