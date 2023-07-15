import WebAppsIndividualPageComponent from "@components/Projects-Applications/WebApps/link/WebAppsIndividualPageComponent";

export async function generateMetadata(
  { params }
) {
  // read route params
  const id = params.link
  const cat = "WebApp"
 
  // fetch data
  const project = await fetch(`https://justcraigdev.com/api/projects/${cat}/${id}`).then((res) => res.json())
 
  return {
    title: 'Web Application Projects - ' + id,
  }
}

const SingleWebAppProject = ({ params }) => {
  return (
    <div>
      <WebAppsIndividualPageComponent params={params}/>
    </div>
  );
};

export default SingleWebAppProject;
