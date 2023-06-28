import ProjectCard from "@components/Cards/ProjectCard";

const DesktopApps = () => {
  const images = ["/next.svg", "/next.svg", "/next.svg"];

  return (
    <section className="grid grid-cols-2 gap-2">
      <ProjectCard
        title="Project Title"
        githubLink="https://github.com/Craig-UK"
        languagesLogos={images}
        summary="Project Summary"
        featured={true}
        projectLink="/project"
      />
      <ProjectCard
        title="Project Title"
        githubLink="https://github.com/Craig-UK"
        languagesLogos={images}
        summary="Project Summary"
        featured={false}
        projectLink="/project"
      />
      <ProjectCard
        title="Project Title"
        githubLink="https://github.com/Craig-UK"
        languagesLogos={images}
        summary="Project Summary"
        featured={false}
        projectLink="/project"
      />
      <ProjectCard
        title="Project Title"
        githubLink="https://github.com/Craig-UK"
        languagesLogos={images}
        summary="Project Summary"
        featured={false}
        projectLink="/project"
      />
    </section>
  )
}

export default DesktopApps