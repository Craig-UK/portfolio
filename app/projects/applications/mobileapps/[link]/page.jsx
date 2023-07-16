import MobileAppsIndividualPageComponent from "@components/Projects-Applications/MobileApps/link/MobileAppsIndividualPageComponent";

export async function generateMetadata(
  { params }
) {
  // read route params
  const id = params.link
 
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