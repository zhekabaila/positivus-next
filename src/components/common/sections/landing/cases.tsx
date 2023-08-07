'use client'

import React from 'react'
import Link from 'next/link'

import { MdOutlineArrowOutward } from 'react-icons/md'

import HeaderSection from '@/components/ui/headerSection'
import Container from '@/components/layout/container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { caseStudies } from '@/constants/app'
import 'swiper/css'

export const CaseStudies = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }

  return (
    <section id="use-cases">
      <Container className="mt-15 lg:mt-20">
        <HeaderSection
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />
        <div className="lg:mt-20 py-17.5 px-15 bg-transparent lg:bg-dark rounded-11.5 gap-x-16">
          <Swiper grabCursor={true} slidesPerView={1} spaceBetween={30} breakpoints={breakpoints}>
            {caseStudies.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="space-y-5 bg-dark lg:bg-transparent py-10.5 px-12.5 lg:p-0 rounded-45px lg:rounded-none">
                  <p className="text-white font-normal text-lg">{item.text}</p>
                  <Link href={item.link} className="flex items-center gap-x-4">
                    <h5 className="text-primary text-xl font-normal">Learn more</h5>
                    <MdOutlineArrowOutward color="#B9FF66" size={17} />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
