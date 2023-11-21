import OtherPagesCard from "@components/Cards/OtherPagesCard";
import ProfileCard from "@components/Cards/ProfileCard";
import Image from "next/image";

export const metadata = {
  title: "Craig's Portfolio - Home",
};

const Home = () => {
  const links = [
    {
      id: "1",
      name: "Projects",
      image: "/assets/icons/file-solid.svg",
      href: "/projects",
    },
    {
      id: "2",
      name: "Dev Blog",
      image: "/assets/icons/file-lines-solid.svg",
      href: "/devblog",
    },
    {
      id: "3",
      name: "Travel Blog",
      image: "/assets/icons/file-image-solid.svg",
      href: "/travelblog",
    },
  ];

  const profileCardButtons = [
    {
      id: "1",
      name: "Contact Me",
      href: "/contact",
    },
  ];

  const otherPagesCardButtons = [
    {
      id: "1",
      name: "Projects",
      href: "/projects",
    },
  ];

  return (
    <div>
      <section className="w-full mt-2 flex-start sm:flex-row flex-col bg-gradient-to-r from-green-400 to-green-700 text-white font-semibold">
        <Image
          src={"/assets/images/portrait.jpg"}
          alt="Portrait"
          width={120}
          height={120}
          className="rounded-full pt-4 pl-2"
        />
        <p className="desc">
          Hi, I&apos;m Craig - Aspiring to Shape the Future with Code.<br /><br />

          Fueled by a decade-long passion for technology, starting from the days of Xbox 360, I&apos;m now deeply immersed in JavaScript (React), Python, and Java. This site is my digital canvas, where I blend my love for gaming and tech into innovative software and web solutions. <br /><br />

          Explore my work, share your thoughts, or just say hello. Together, let&apos;s make tech engaging and accessible. <br /><br />
        </p>
      </section>
      <section className="pt-2 pb-2 mt-2">
        <ProfileCard
          image={"/assets/images/portrait.jpg"}
          title={"Craig Climie"}
          subtitle={"Software Developer, Web Developer"}
          button={profileCardButtons[0]}
          links={links}
          aboutText="Hello there, I am Craig! I am currently proficient in React and Python
          with some understanding of C# and Java. I am currently learning the
          Next.js React framework, and expanding my knowledge of C#, Java and
          Python."
        />
      </section>
      <section className="pt-10">
        <OtherPagesCard
          pageTitle="Projects"
          cardTitle="Check out some of my projects!"
          cardText="Currently proficient in React and Python with some understanding of C# and Java. Also, currently learning the Next.js React framework along with expanding my understanding of C#, Java and Python! Check out some of the projects that I have completed in my personal free-time or
          University projects that I completed for University classes!"
          button={otherPagesCardButtons}
        />
      </section>
    </div>
  );
};

export default Home;
