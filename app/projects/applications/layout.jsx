import OtherPagesCard from "@components/Cards/OtherPagesCard";

const ProjectAppsLayout = ({ children }) => {
  const githubButton = [
    {
      name: "My GitHub",
      href: "https://github.com/Craig-UK",
    },
  ];

  const contactButton = [
    {
      name: "Contact Me",
      href: "/contact",
    },
  ];

  const DevTravelBlogButton = [
    {
      name: "Dev Blog",
      href: "/devblog",
    },
    {
      name: "Travel Blog",
      href: "/travelblog",
    },
  ];

  return (
    <div>
      {children}

      <section className="w-full pt-10 flex-start flex-row justify-between gap-2">
        <OtherPagesCard
          pageTitle="GitHub"
          cardTitle="Check out my GitHub"
          cardText="My GitHub contains all of the projects that I have made publicly viewable. You can also view some of the 
          open-source projects and repositories that I have contributed to on my GitHub!"
          button={githubButton}
        />
        <OtherPagesCard
          pageTitle="Dev Blog & Travel Blog"
          cardTitle="Check out my Dev or Travel Blog"
          cardText="You can view my Dev Blog where I discuss some of the projects that I am currently working on, or have
          previously worked on and more. My Travel Blog contains some of the adventures that I go on in my free
          time."
          button={DevTravelBlogButton}
        />
      </section>
      <section className="w-4/6 pt-10 m-auto">
        <OtherPagesCard
          pageTitle="Contact Me"
          cardTitle="Contact Me about my projects"
          cardText="Feel free to contact me to ask about any of the projects that you can see on the web application 
          projects, mobile application projects or the desktop application projects pages."
          button={contactButton}
        />
      </section>
    </div>
  );
};

export default ProjectAppsLayout;
