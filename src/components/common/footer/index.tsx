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
      <footer className="bg-dark py-14 px-15 rounded-t-45px">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-2.5">
            <Logo color="white" />
            <Title color="white" />
          </div>
          <ul className="flex items-center gap-x-10">
            {navManu.map((item, index) => (
              <li key={index} className="text-lg font-normal text-white underline">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-5">
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
        <div className="flex justify-between gap-x-30 items-center mt-16 ">
          <div className="grid grid-cols-1">
            <div className="flex">
              <h3 className=" bg-primary p-x-7px rounded-lg text-black text-xl font-medium">Contact us:</h3>
            </div>
            <ul className="space-y-5 mt-7 text-left text-white">
              <li>Email: info@positivus.com</li>
              <li>Phone: 555-567-8901</li>
              <li>Address: 1234 Main St Moonstone City, Stardust State 12345</li>
            </ul>
          </div>
          <div className="flex items-center gap-x-5 py-14.5 px-10 bg-dark-gray rounded-2xl">
            <input
              type="email"
              placeholder="Email"
              className="bg-dark py-5.5 px-9 text-white placeholder:text-white text-lg font-normal rounded-2xl outline outline-1 outline-white focus:outline-primary"
            />
            <Button text="Subscribe to news" className="py-5 px-9 text-black text-xl font-normal" rounded="2xl" />
          </div>
        </div>
        {/* Contact us */}
        {/* Copyright */}
        <div className="flex items-center gap-x-154px mt-12.5 pt-12.5 border-t border-t-white">
          <p className="text-white text-lg font-normal capitalize">
            © {new Date().getFullYear()} Positivus. All Rights Reserved.
          </p>
          <Link href="/#privacy-policy" className="text-white text-lg font-normal underline capitalize">
            Privacy Policy
          </Link>
        </div>
        {/* Copyright */}
      </footer>
    </Container>
  )
}

export default Footer
