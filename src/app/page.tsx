import React from 'react'

import {
  TestimonialsSection,
  ServicesSection,
  WorkingSection,
  ContactSection,
  TeamsSection,
  LogosSection,
  CaseStudies,
  CTASection,
  Hero
} from '@/components/common/sections/landing'

export default function Home() {
  return (
    <main>
      <Hero />
      <LogosSection />
      <ServicesSection />
      <CTASection />
      <CaseStudies />
      <WorkingSection />
      <TeamsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
