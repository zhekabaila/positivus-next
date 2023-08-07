import React from 'react'

import { services } from '@/constants/app'

import HeaderSection from '@/components/ui/headerSection'
import ServiceCard from '@/components/ui/cards/service'
import Container from '@/components/layout/container'

export const ServicesSection = () => {
  return (
    <section id="services">
      <Container className="mt-20 space-y-10 lg:space-y-21">
        <HeaderSection
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These
          services include:"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7.5 lg:gap-10">
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              icon={item.icon}
              title={item.title}
              link={item.link}
              bgColor={item.bgColor}
              bgText={item.bgText}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
