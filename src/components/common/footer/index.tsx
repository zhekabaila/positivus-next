import Link from 'next/link'
import React from 'react'

import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'

import Container from '../../layout/container'
import Button from '@/components/ui/button'
import { navManu } from '@/constants/app'
import Title from '@/components/ui/title'
import Logo from '@/components/ui/logo'

const Footer = () => {
  return (
    <Container>
      <footer className="bg-dark py-12.5 lg:py-14 px-5 lg:px-15 rounded-t-45px space-y-9">
        <div className="flex flex-col gap-y-9 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex justify-center lg:justify-start items-center gap-x-2.5">
            <Logo width={24} height={24} color="white" />
            <Title width={112} height={20} color="white" />
          </div>
          <ul className="flex flex-col lg:flex-row items-center gap-y-15px lg:gap-x-10">
            {navManu.map((item, index) => (
              <li key={index} className="text-base lg:text-lg font-normal text-white lg:underline">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-x-5">
            <Link href="https://www.linkedin.com/">
              <div className="flex justify-center items-center p-2 bg-white rounded-full">
                <FaLinkedinIn color="black" size={20} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/">
              <div className="flex justify-center items-center p-2 bg-white rounded-full">
                <FaFacebookF color="black" size={20} />
              </div>
            </Link>
            <Link href="">
              <div className="flex justify-center items-center p-2 bg-white rounded-full">
                <FaTwitter color="black" size={20} />
              </div>
            </Link>
          </div>
        </div>
        {/* Contact us */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-y-9 lg:gap-y-0 lg:gap-x-30 items-center lg:mt-16">
          <div className="grid grid-cols-1 gap-y-9 lg:gap-y-7">
            <div className="flex justify-center lg:justify-start">
              <h3 className=" bg-primary p-x-7px rounded-lg text-black text-xl font-medium">Contact us:</h3>
            </div>
            <ul className="space-y-3.5 lg:space-y-5 text-center lg:text-left text-white">
              <li className="">Email: info@positivus.com</li>
              <li className="">Phone: 555-567-8901</li>
              <li className="">Address: 1234 Main St Moonstone City, Stardust State 12345</li>
            </ul>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-y-6 gap-x-5 p-7.5 lg:py-14.5 lg:px-10 bg-dark-gray rounded-2xl w-full">
            <input
              type="email"
              placeholder="Email"
              className="bg-dark py-5.5 px-6 lg:px-9 w-full text-white placeholder:text-white text-lg font-normal rounded-2xl outline outline-1 outline-white focus:outline-primary"
            />
            <Button text="Subscribe to news" className="py-5 px-9 text-black text-xl font-normal w-full" rounded="2xl" />
          </div>
        </div>
        {/* Contact us */}
        <div className="lg:hidden flex justify-center items-center gap-x-5">
          <Link href="https://www.linkedin.com/">
            <div className="flex justify-center items-center p-2 bg-white rounded-full">
              <FaLinkedinIn color="black" size={20} />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/">
            <div className="flex justify-center items-center p-2 bg-white rounded-full">
              <FaFacebookF color="black" size={20} />
            </div>
          </Link>
          <Link href="">
            <div className="flex justify-center items-center p-2 bg-white rounded-full">
              <FaTwitter color="black" size={20} />
            </div>
          </Link>
        </div>
        {/* Copyright */}
        <div className="flex flex-col justify-center lg:justify-start lg:flex-row items-center gap-x-154px mt-12.5 pt-12.5 border-t border-t-white">
          <p className="text-center lg:text-left text-white text-lg font-normal capitalize">
            © {new Date().getFullYear()} Positivus. All Rights Reserved.
          </p>
          <Link
            href="/#privacy-policy"
            className="text-center lg:text-left text-white text-lg font-normal underline capitalize">
            Privacy Policy
          </Link>
        </div>
        {/* Copyright */}
      </footer>
    </Container>
  )
}

export default Footer
