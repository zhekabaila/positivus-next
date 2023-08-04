import React from 'react'

import Container from '@/components/layout/container'
import Button from '@/components/ui/button'
import Image from 'next/image'

export const CTASection = () => {
  return (
    <Container className="mt-17.5 lg:mt-25">
      <div className="relative flex items-center bg-secondary p-12.5 lg:px-15 lg:py-10 rounded-45px">
        <div className="space-y-5 lg:space-y-6.5 w-500px">
          <h3 className="text-26px leading-normal lg:text-3xl font-medium">Let’s make things happen</h3>
          <p className="text-base lg:text-lg font-normal">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed
            online.
          </p>
          <Button text="Get your free proposal" variant="dark" rounded="xl" className="py-5 px-9" />
        </div>
        <div className="hidden lg:block absolute right-135px">
          <Image src="/static/icons/Illustration_1.svg" width={359} height={395} alt="" />
        </div>
      </div>
    </Container>
  )
}
