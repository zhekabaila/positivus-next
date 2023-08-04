'use client'

import React from 'react'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'

import TestimonialCard from '@/components/ui/cards/testimonial'
import Container from '@/components/layout/container'
import { testimonials } from '@/constants/app'

export const TestimonialsSection = () => {
  const breakpoints = {
    // menyesuaikan responsive
    // slidesPerView -> jumlah slide yang tampil
    // spaceBetween -> jarak antar slide

    0: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 0
    }
  }

  return (
    <Container className="my-21.5">
      <div className="flex gap-x-10">
        <h2 className="text-black text-40px font-medium leading-normal bg-primary px-2 rounded-lg">Testimonials</h2>
        <p className="text-black font-normal text-lg w-125">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>
      <div className="mt-21.5">
        <div className=" bg-dark rounded-11.5 pt-21 pb-17">
          <Swiper
            grabCursor={true}
            breakpoints={breakpoints}
            centeredSlides={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[Pagination]}
            className="swiper_container mt-18">
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
            <div className="slider-controler pt-18">
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </Container>
  )
}
