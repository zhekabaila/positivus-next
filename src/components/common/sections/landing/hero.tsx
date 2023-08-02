import Image from 'next/image'
import React from 'react'

import Container from '@/components/layout/container'
import Button from '@/components/ui/button'

export const Hero = () => {
  return (
    <Container className="py-17.5">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-9">
          <h1 className="text-black text-6xl font-medium leading-normal">Navigating the digital landscape for success</h1>
          <div className="flex lg:hidden items-center justify-center aspect-square max-w-md mx-auto">
            <Image src="/static/icons/Illustration.svg" width={600} height={500} alt="" />
          </div>
          <p className="text-xl text-black font-normal">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,
            PPC, social media marketing, and content creation.
          </p>
          <Button text="Book a consultation" variant="dark" rounded="2xl" className="py-5 px-9" />
        </div>
        <div className="hidden lg:flex items-center justify-center aspect-square max-w-md ml-auto">
          <Image src="/static/icons/Illustration.svg" width={600} height={500} alt="" />
        </div>
      </div>
    </Container>
  )
}
