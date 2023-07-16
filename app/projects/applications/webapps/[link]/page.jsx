import WebAppsIndividualPageComponent from "@components/Projects-Applications/WebApps/link/WebAppsIndividualPageComponent";

export async function generateMetadata(
  { params }
) {
  // read route params
  const id = params.link
 
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
