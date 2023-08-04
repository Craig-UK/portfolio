import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SingleWebProject = ({
  title,
  github,
  deployed,
  images,
  desc,
  limits,
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
        <Carousel className="w-2/6">
          {images?.map((img) => (
            <div key={img}>
              <Image
                src={img}
                alt="Image on Single Web Project Page"
                width={220}
                height={220}
                className="object-top"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h1 className="text-3xl font-bold font-satoshi">Project Description</h1>
        {desc?.map((description, i) => (
          <p key={description} className="mt-5 font-satoshi">
            {description}
          </p>
        ))}
        <h1 className="text-3xl font-bold font-satoshi mt-10">
          Project Limitations
        </h1>
        <p className="mt-5">{limits}</p>
      </div>
    </div>
  );
};

export default SingleWebProject;
