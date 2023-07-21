import React from 'react'

const ImageCopyrights = ({ logo }) => {
  return (
    <div className='p-5 m-2'>
        <p className='flex justify-center'>
            All images displayed on this website are subject to copyright.
        </p>
        <p className='flex justify-center'>
            These logos have been used to display information.
        </p>
        <p className='flex justify-center'>
            All images and logos have been trademarked and/or copyrighted by their
            respective owners.
        </p>
        <div className='mt-5'>
            {logo?.map(logo => (
                <div key={logo} className='flex justify-center'>
                    The {logo.logo} logo has been copyrighted and/or trademarked by {logo.company}.
                </div>
            ))}
        </div>
    </div>
  )
}

export default ImageCopyrights