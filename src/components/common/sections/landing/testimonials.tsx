'use client'

import React from 'react'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'

import TestimonialCard from '@/components/ui/cards/testimonial'
import Container from '@/components/layout/container'
import { testimonials } from '@/constants/app'
import HeaderSection from '@/components/ui/headerSection'

export const TestimonialsSection = () => {
  const breakpoints = {
    // menyesuaikan responsive
    // slidesPerView -> jumlah slide yang tampil
    // spaceBetween -> jarak antar slide

    0: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }

  return (
    <section id="testimonials">
      <Container className="mt-15 lg:mt-21.5 space-y-10 lg:space-y-21.5">
        <HeaderSection
          title="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <div className=" bg-dark rounded-11.5 pt-7.5 lg:pt-21 pb-15 lg:pb-17 px-7.5 lg:px-0">
          <Swiper
            grabCursor={true}
            breakpoints={breakpoints}
            centeredSlides={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[Pagination]}>
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
            <div className="slider-controler pt-15 lg:pt-18">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
