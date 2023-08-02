'use client'

import React from 'react'
import Container from '@/components/layout/container'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { navManu } from '@/constants/app'
import Logo from '@/components/ui/logo'
import Title from '@/components/ui/title'

const Navbar = () => {
  return (
    <Container className="py-6 top-0 left-0 w-screen bg-white">
      <nav className="flex justify-between items-center w-full">
        <button className="flex items-center gap-x-3">
          <Logo color="black" />
          <Title color="black" />
        </button>
        <ul className="flex items-center gap-x-10">
          {navManu.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="text-xl font-normal">
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Button text="Request a quote" variant="outline" rounded="xl" className="py-2.5 px-5 text-black" />
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Navbar
