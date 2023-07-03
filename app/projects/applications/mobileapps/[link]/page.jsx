"use client";

import SingleMobileProject from "@components/Single-Project-Page/SingleMobileProject";
import { useEffect, useState } from "react";

const SingleMobileAppProject = ({ params }) => {
    const cat = "MobileApp";
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      const res = await fetch(`/api/projects/${cat}/${params.link}`);
      const data = await res.json();

      setProject(data);
    };

    fetchProject();
  }, []);

  return (
    <div>
      {project.map((proj) => (
        <SingleMobileProject
          key={proj._id}
          title={proj.title}
          github={proj.github}
          deployed={proj.deployed === "" ? "Not Deployed" : proj.deployed}
          desc={proj.description}
          limits={proj.limitations}
          images={proj.images}
        />
      ))}
    </div>
  );
};

export default SingleMobileAppProject