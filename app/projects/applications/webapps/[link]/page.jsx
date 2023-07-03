"use client";

import SingleWebProject from "@components/SingleWebProject";
import { useEffect, useState } from "react";

const SingleWebAppProject = ({ params }) => {
    const cat = "WebApp";
    const [project, setProject] = useState([]);

    useEffect(() => {
      const fetchProject = async() => {
        const res = await fetch(`/api/projects/${cat}/${params.link}`);
        const data = await res.json();

        console.log(data);

        setProject(data);
      }

      console.log(project);
    
      fetchProject();
    }, [])
    

  return (
    <div>
        {project.map(proj => (
            <SingleWebProject 
                key={proj._id}
                title={proj.title}
                github={proj.github}
                deployed={proj.deployed === '' ? "Not Deployed" : proj.deployed}
                desc={proj.description}
                limits={proj.limitations}
                images={proj.images}
            />
        ))}
    </div>
  )
}

export default SingleWebAppProject