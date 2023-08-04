'use client'

import React, { useState } from 'react'
import Container from '@/components/layout/container'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { navManu } from '@/constants/app'
import Logo from '@/components/ui/logo'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Title from '@/components/ui/title'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isShow, setShow] = useState<boolean>(false)

  return (
    <header className="fixed top-0 left-0 bg-white z-50">
      <Container className="py-6 top-0 left-0 w-screen">
        <nav className="flex justify-between items-center w-full">
          <button className="flex items-center gap-x-3">
            <Logo color="black" />
            <Title color="black" />
          </button>
          <Button className="block lg:hidden" variant="none" onClick={() => setShow((currentValue) => !currentValue)}>
            {isShow ? <AiOutlineClose color="#000000" size={32} /> : <AiOutlineMenu color="#000000" size={32} />}
          </Button>
          <ul className="hidden lg:flex items-center gap-x-10">
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
      <Container className="absolute bg-white w-full py-4">
        <ul className={cn('flex-col w-full', isShow ? 'flex' : 'hidden')}>
          {navManu.map((item, index) => (
            <li key={index} className="flex justify-end w-full p-5">
              <Link href={item.link} className="text-xl font-normal" onClick={() => setShow(false)}>
                {item.title}
              </Link>
            </li>
          ))}
          <Button
            text="Request a quote"
            variant="outline"
            rounded="xl"
            className="py-2.5 px-5 text-black"
            onClick={() => setShow(false)}
          />
        </ul>
      </Container>
    </header>
  )
}

export default Navbar
