import React from 'react'

import { MdOutlineArrowOutward } from 'react-icons/md'

import Container from '@/components/layout/container'
import HeaderSection from '@/components/ui/headerSection'

export const CaseStudies = () => {
  return (
    <Container className="mt-15 lg:mt-20">
      <HeaderSection
        title="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <div className="flex justify-between items-center lg:mt-20 py-17.5 px-15 bg-dark rounded-11.5 gap-x-16">
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
