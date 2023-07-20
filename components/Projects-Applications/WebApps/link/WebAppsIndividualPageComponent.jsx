"use client";

import SingleWebProject from "@components/Single-Project-Page/SingleWebProject";
import { useEffect, useState } from "react";

const WebAppsIndividualPageComponent = ({ params }) => {
    const cat = "WebApp";
    const [project, setProject] = useState([]);
  
    useEffect(() => {
      const fetchProject = async () => {
        const res = await fetch(`/api/projects/${cat}/${params.link}`);
        const data = await res.json();
  
        setProject(data);
      };
  
      fetchProject();
    }, []);

    console.log(project)
  
    return (
      <div>
        {project.map((proj) => (
          <SingleWebProject
            key={proj._id}
            title={proj.title}
            github={proj.github}
            deployed={proj.deployed === "" ? "Not Deployed" : proj.deployed}
            desc={proj.description?.map((projDesc) => projDesc)}
            limits={proj.limitations}
            images={proj.images}
          />
        ))}
      </div>
    );
}

export default WebAppsIndividualPageComponent