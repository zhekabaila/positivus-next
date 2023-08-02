import Image from 'next/image'
import React from 'react'

import { sponsorLogos } from '@/constants/app'

import Container from '@/components/layout/container'
import {
  CTASection,
  CaseStudies,
  Hero,
  ServicesSection,
  TeamsSection,
  WorkingSection
} from '@/components/common/sections/landing'

export default function Home() {
  return (
    <main>
      <Hero />
      <Container className="my-20">
        <div className="flex justify-between grayscale">
          {sponsorLogos.map((img, index) => (
            <Image key={index} src={img} width={127} height={48} alt="Sponsor Logo" className="aspect-video" />
          ))}
        </div>
      </Container>
      <ServicesSection />
      <CTASection />
      <CaseStudies />
      <WorkingSection />
      <TeamsSection />
    </main>
  )
}
