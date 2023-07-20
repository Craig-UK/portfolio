import DesktopAppsIndividualPageComponent from "@components/Projects-Applications/DesktopApps/link/DesktopAppsIndividualPageComponent";

export async function generateMetadata(
  { params }
) {
  // read route params
  const id = params.link
 
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