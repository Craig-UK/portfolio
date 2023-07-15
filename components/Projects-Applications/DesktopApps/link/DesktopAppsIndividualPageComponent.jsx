"use client";

import SingleDesktopProject from "@components/Single-Project-Page/SingleDesktopProject";
import { useEffect, useState } from "react";

const DesktopAppsIndividualPageComponent = ({ params }) => {
  const cat = "DesktopApp";
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
        <SingleDesktopProject
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
}

export default DesktopAppsIndividualPageComponent