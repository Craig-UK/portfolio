"use client";

import ProjectCard from "@components/Cards/ProjectCard";
import { useEffect, useState } from "react";

const DesktopAppsPageComponent = () => {
  const cat = "DesktopApp";
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async() => {
      const res = await fetch(`/api/projects/${cat}`);
      const data = await res.json();

      setProjects(data);
    }
  
    fetchProjects();
  }, [])

  return (
    <div>
      {projects.length == 0 && (
        <div className="flex items-center justify-center">
          <p>No Desktop Application projects available. Please try again later.</p>
        </div>
      )}
      <section className="grid grid-cols-2 gap-2">
        {projects?.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            githubLink={project.github}
            languagesLogos={project.logo}
            summary={project.summary}
            featured={project.featured}
            projectLink={project.link}
            badges={project.badges}
          />
        ))}
      </section>
    </div>
  );
}

export default DesktopAppsPageComponent