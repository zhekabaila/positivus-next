import React from 'react'

import { MdOutlineArrowOutward } from 'react-icons/md'

import Container from '@/components/layout/container'

export const CaseStudies = () => {
  return (
    <Container className="my-20">
      <div className="flex gap-x-10">
        <h2 className="text-black text-40px font-medium leading-normal bg-primary px-2 rounded-lg">Case Studies</h2>
        <p className="text-black font-normal text-lg w-125">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
        </p>
      </div>
      <div className="flex justify-between items-center mt-20 py-17.5 px-15 bg-dark rounded-11.5 gap-x-16">
        <div className="space-y-5">
          <p className="text-white font-normal text-lg">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic
            and a 25% increase in sales.
          </p>
          <button type="button" className="flex items-center gap-x-4">
            <h5 className="text-primary text-xl font-normal">Learn more</h5>
            <MdOutlineArrowOutward color="#B9FF66" size={17} />
          </button>
        </div>
        <div className="space-y-5">
          <p className="text-white font-normal text-lg">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic
            and a 25% increase in sales.
          </p>
          <button type="button" className="flex items-center gap-x-4">
            <h5 className="text-primary text-xl font-normal">Learn more</h5>
            <MdOutlineArrowOutward color="#B9FF66" size={17} />
          </button>
        </div>
        <div className="space-y-5">
          <p className="text-white font-normal text-lg">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic
            and a 25% increase in sales.
          </p>
          <button type="button" className="flex items-center gap-x-4">
            <h5 className="text-primary text-xl font-normal">Learn more</h5>
            <MdOutlineArrowOutward color="#B9FF66" size={17} />
          </button>
        </div>
      </div>
    </Container>
  )
}
