import MobileAppsIndividualPageComponent from "@components/Projects-Applications/MobileApps/link/MobileAppsIndividualPageComponent";

export async function generateMetadata(
  { params }
) {
  // read route params
  const id = params.link
  const cat = "MobileApp"
 
  // fetch data
  const project = await fetch(`https://justcraigdev.com/api/projects/${cat}/${id}`).then((res) => res.json())
 
  return {
    title: 'Mobile Application Projects - ' + id,
  }
}

const SingleMobileAppProject = ({ params }) => {
  return (
    <div>
      <MobileAppsIndividualPageComponent params={params} />
    </div>
  );
};

export default SingleMobileAppProject