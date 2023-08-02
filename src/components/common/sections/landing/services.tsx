import React from 'react'

import { services } from '@/constants/app'

import ServiceCard from '@/components/ui/cards/service'
import Container from '@/components/layout/container'

export const ServicesSection = () => {
  return (
    <section id="services">
      <Container className="py-20 space-y-21">
        <div className="flex gap-x-10">
          <h2 className="text-black text-40px font-medium leading-normal bg-primary px-2 rounded-lg">Services</h2>
          <p className="text-black font-normal text-lg w-125">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These
            services include:
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
