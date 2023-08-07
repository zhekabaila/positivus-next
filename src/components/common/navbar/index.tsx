'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Container from '@/components/layout/container'
import { Menu, Transition } from '@headlessui/react'
import Button from '@/components/ui/button'
import Title from '@/components/ui/title'
import { navManu } from '@/constants/app'
import Logo from '@/components/ui/logo'

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
                <a href={item.link} className="text-xl font-normal">
                  {item.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact-us"
                className="text-black px-5 py-2.5 border-1 border-black border-solid bg-transparent rounded-xl">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </Container>
      <Transition
        show={isShow}
        enter="transition-all duration-500"
        enterFrom="max-h-0"
        enterTo="max-h-screen"
        leave="transition-all duration-500"
        leaveFrom="max-h-screen"
        leaveTo="max-h-0"
        className=" absolute bg-white w-full lg:hidden overflow-y-hidden">
        <Menu>
          <Container className="py-4">
            <ul className="flex flex-col w-full">
              {navManu.map((item, index: number) => (
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
        </Menu>
      </Transition>
    </header>
  )
}

export default Navbar
