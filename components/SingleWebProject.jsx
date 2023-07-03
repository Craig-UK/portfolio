import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const SingleWebProject = ({ title, github, deployed, images, desc, limits }) => {
  return (
    <div className='font-satoshi'>
       <h1 className='text-4xl font-bold'>{title}</h1>
       <div className='flex justify-start gap-5'>
        <Link href={github}>{github}</Link>
        {deployed === "Not Deployed" ? (
          <p>Not Deployed</p>
        ): (
          <Link href={deployed}>{deployed}</Link>
        )}
       </div>
       <div className='flex justify-center mt-5'>
          <Carousel>
          {images?.map(img => (
          <div key={img}>
              <Image 
                src={img}
                alt='Image on Single Web Project Page'
                width={220}
                height={220}
              />
          </div>
        ))}
        </Carousel>
       </div>
       <div className='mt-5'>
        <p>{desc}</p>
        <p>{limits}</p> 
       </div>
    </div>
  )
}

export default SingleWebProject