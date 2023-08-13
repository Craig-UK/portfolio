import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SingleDesktopProject = ({
  title,
  github,
  deployed,
  images,
  desc,
  limits,
  badges,
  courseOrTutorialLink
}) => {
  return (
    <div className="font-satoshi">
      <h1 className="text-4xl font-bold">{title}</h1>
      <div className="flex justify-start gap-5">
        <Link href={github} className="hover:underline">
          Projects GitHub Repository can be viewed here
        </Link>
        {deployed === "Not Deployed" ? (
          <p>Not Deployed</p>
        ) : (
          <Link href={deployed} className="hover:underline">
            Deployed Project can be viewed here
          </Link>
        )}
      </div>
      <div className="flex justify-center mt-5">
        <Carousel>
          {images?.map((img) => (
            <div key={img}>
              <Image
                src={img}
                alt="Image on Single Web Project Page"
                width={220}
                height={220}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="mt-5">
        <p>{desc}</p>
        <p>{limits}</p>
      </div>
      {Object.entries(badges)[0]?.map && badges[0].tutorial && courseOrTutorialLink && (
          <div className="mt-5">
            <h1 className="text-3xl font-bold font-satoshi">Tutorial Used</h1>
            <p>A tutorial was used to develop this project. The tutorial used to develop this project can be seen <Link href={courseOrTutorialLink} className="hover:underline">here</Link>.</p>
          </div>
        )}
        {Object.entries(badges)[0]?.map && badges[0].course && courseOrTutorialLink && (
          <div className="mt-5">
            <h1 className="text-3xl font-bold font-satoshi">Course Used</h1>
            <p>This project was developed while following and completing a course. The course being completed that was used to develop this project can be seen <Link href={courseOrTutorialLink} className="hover:underline">here</Link>.</p>
          </div>
        )}
    </div>
  );
};

export default SingleDesktopProject;
