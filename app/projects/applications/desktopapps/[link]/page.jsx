import DesktopAppsIndividualPageComponent from "@components/Projects-Applications/DesktopApps/link/DesktopAppsIndividualPageComponent";

export async function generateMetadata(
  { params }
) {
  // read route params
  const id = params.link
  const cat = "DesktopApp"
 
  // fetch data
  const project = await fetch(`https://justcraigdev.com/api/projects/${cat}/${id}`).then((res) => res.json())
 
  return {
    title: 'Desktop Application Projects - ' + id,
  }
}

const SingleDesktopAppProject = ({ params }) => {
  return (
    <div>
      <DesktopAppsIndividualPageComponent params={params} />
    </div>
  );
};

export default SingleDesktopAppProject