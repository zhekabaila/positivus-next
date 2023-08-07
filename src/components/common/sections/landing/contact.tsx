import React from 'react'
import Image from 'next/image'

import HeaderSection from '@/components/ui/headerSection'
import Container from '@/components/layout/container'
import Button from '@/components/ui/button'

export const ContactSection = () => {
  return (
    <section id="contact-us">
      <Container className="mt-15 lg:mt-20 mb-22.5 lg:mb-35 space-y-10 lg:space-y-21.5">
        <HeaderSection title="Contact Us" description="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-secondary py-10 lg:py-15 px-7.5 lg:px-25 rounded-11.5">
          <form action="" className="grid grid-cols-1 gap-y-10">
            <div className="flex justify-evenly lg:justify-start items-center gap-x-8.5">
              <label className="flex items-center gap-x-3.5 text-black text-base lg:text-lg font-normal">
                <input type="radio" name="radio" className="w-7 h-7  accent-primary" />
                Say Hi
              </label>
              <label className="flex items-center gap-x-3.5 text-black text-base lg:text-lg font-normal">
                <input type="radio" name="radio" className="w-7 h-7  accent-primary" />
                Get a Quote
              </label>
            </div>
            <div className="grid grid-cols-1 gap-y-6.5 py-2.5 lg:py-0">
              <div className="space-y-1.5">
                <h4 className="text-black text-base font-normal">Name</h4>
                <input
                  type="text"
                  placeholder="Name"
                  className="px-5 lg:px-8 py-4.5 text-#898989 text-base lg:text-lg font-normal outline-solid outline-1 outline-black rounded-2xl w-full"
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-black text-base font-normal">Email*</h4>
                <input
                  type="text"
                  placeholder="Email"
                  className="px-5 lg:px-8 py-4.5 text-#898989 text-base lg:text-lg font-normal outline-solid outline-1 outline-black rounded-2xl w-full"
                  autoComplete="off"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-black text-base font-normal">Messages*</h4>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Messages"
                  autoComplete="off"
                  className="px-5 lg:px-8 py-4.5 w-full h-40 text-#898989 text-base lg:text-lg font-normal outline-solid outline-1 outline-black rounded-2xl caret-black"
                />
              </div>
            </div>
            <Button type="button" text="Send Message" variant="dark" className="py-5 px-9" rounded="xl" />
          </form>
          <div className="hidden lg:block relative overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 -right-85">
              <Image src="/static/icons/contact-us-ilustration.svg" width={691.57} height={648} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
