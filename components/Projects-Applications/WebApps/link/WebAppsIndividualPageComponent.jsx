"use client";

import SingleWebProject from "@components/Single-Project-Page/SingleWebProject";
import { useEffect, useState } from "react";

const WebAppsIndividualPageComponent = ({ params }) => {
    const cat = "WebApp";
    const [project, setProject] = useState([]);
  
    useEffect(() => {
      const fetchProject = async () => {
        const res = await fetch(`/api/projects/${cat}/${params.id}/${params.link}`);
        const data = await res.json();
  
      console.log(data);

        setProject(data);
      };
  
      fetchProject();
    }, []);
  
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
            badges={proj.badges}
            courseOrTutorialLink={proj.courseOrTutorialLink}
          />
        ))}
      </div>
    );
}

export default WebAppsIndividualPageComponent