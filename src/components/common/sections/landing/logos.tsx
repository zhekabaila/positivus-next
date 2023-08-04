import Image from 'next/image'
import React from 'react'

import { sponsorLogos } from '@/constants/app'

import Container from '@/components/layout/container'

export const LogosSection = () => {
  return (
    <Container className="my-20 overflow-x-hidden">
      <div className="flex flex-wrap gap-4 justify-center lg:justify-between grayscale">
        {sponsorLogos.map((img, index) => (
          <Image key={index} src={img} width={127} height={48} alt="Sponsor Logo" className="aspect-video" />
        ))}
      </div>
    </Container>
  )
}
