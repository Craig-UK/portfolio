"use client";

import ProjectCard from "@components/Cards/ProjectCard";
import { useEffect, useState } from "react";

const WebAppsPageComponent = () => {
    const cat = "WebApp";
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
            <p>No Web Application projects available. Please try again later.</p>
          </div>
        )}
        <section className="grid grid-cols-2 gap-2">
          {projects?.map(project => (
            <ProjectCard 
              key={project._id}
              id={project._id}
              title={project.title}
              githubLink={project.github}
              languagesLogos={project.logo}
              summary={project.summary}
              featured={project.featured}
              projectLink={project.link}
              badges={project.badges}
              courseOrTutorialLink={project?.courseOrTutorialLink}
            />
          ))}
        </section>
      </div>
    )
}

export default WebAppsPageComponent