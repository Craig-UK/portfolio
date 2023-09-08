"use client";

import ProjectCard from "@components/Cards/ProjectCard";
import { useEffect, useState } from "react";

const WebAppsPageComponent = () => {
    const cat = "WebApp";
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
  
    useEffect(() => {
      const fetchProjects = async() => {
        const res = await fetch(`/api/projects/${cat}`);
        const data = await res.json();

        setProjects(data);
      }

      fetchProjects();
    }, [])    
  
    useEffect(() => {
      if(projects.length > 0) {
        setIsLoading(false);
      } else {
        setTimeout(() => {
          setMessage("There may be no Web Application projects available. Please try again later")
        }, 5000)
        setIsLoading(true);
        setMessage("Loading Web Application projects. Please wait...")
      }
    }, [projects.length])

    return (
      <div>
        {projects.length == 0 && (
          <div className="flex items-center justify-center">
            <p>.</p>
          </div>
        )}
        {isLoading && (
          <div className="flex items-center justify-center">
            <p>{message}</p>
          </div>
        )}
        <section className="grid sm:grid-cols-2 gap-2">
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