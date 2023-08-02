import React from 'react'

import Container from '@/components/layout/container'
import Button from '@/components/ui/button'
import Image from 'next/image'

export const CTASection = () => {
  return (
    <Container className="my-25">
      <div className="relative flex items-center bg-secondary px-15 py-10 rounded-45px">
        <div className="space-y-6.5 w-500px">
          <h3 className="text-3xl font-medium">Let’s make things happen</h3>
          <p className="text-lg font-normal">
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
