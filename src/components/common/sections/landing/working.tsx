'use client'

import React, { useState, Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'

import { cn, formatTwoDigits } from '@/lib/utils'
import { workingProcess } from '@/constants/app'

import Container from '@/components/layout/container'
import Button from '@/components/ui/button'
import HeaderSection from '@/components/ui/headerSection'

interface ActiveStateType {
  activeNumber: number
  isShowing: boolean
}

export const WorkingSection = () => {
  const [active, setActive] = useState<ActiveStateType>({
    activeNumber: 1,
    isShowing: true
  })

  return (
    <section id="our-working">
      <Container className="mt-15 lg:mt-20 space-y-7.5 lg:space-y-20">
        <HeaderSection title="Our Working Proscess" description="Step-by-Step Guide to Achieving Your Business Goals" />
        <div className="grid grid-cols-1 gap-y-5 lg:gap-y-7.5">
          {workingProcess.map((item, index: number) => (
            <div
              key={index}
              className={cn(
                'px-7.5 lg:px-15 py-7.5 lg:py-10 border border-solid border-dark rounded-45px shadow-[0_5px_0_0_#191A23] transition-all ease-in-out duration-300',
                active.isShowing && active.activeNumber === index + 1 ? 'bg-primary' : 'bg-secondary'
              )}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-7.5 lg:gap-x-6.5">
                  <h2 className="text-black font-medium text-3xl lg:text-60px lg:leading-normal">
                    {formatTwoDigits(index + 1)}
                  </h2>
                  <h3 className="text-lg lg:text-3xl font-medium text-black">{item.title}</h3>
                </div>
                <Button
                  type="button"
                  variant="none"
                  onClick={() => {
                    setActive((e) => {
                      if (e.activeNumber === index + 1) {
                        return {
                          activeNumber: e.activeNumber,
                          isShowing: !e.isShowing
                        }
                      } else {
                        return {
                          activeNumber: index + 1,
                          isShowing: true
                        }
                      }
                    })
                  }}>
                  <svg
                    className="w-8 h-8 lg:w-15 lg:h-15"
                    viewBox="0 0 58 59"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23" />
                    {active.isShowing && active.activeNumber === index + 1 ? (
                      <path d="M20 32.14V26.5H37.76V32.14H20Z" fill="black" />
                    ) : (
                      <path
                        d="M25.6 41.58V31.86H16V26.22H25.6V16.5H31.48V26.22H41.08V31.86H31.48V41.58H25.6Z"
                        fill="#191A23"
                      />
                    )}
                  </svg>
                </Button>
              </div>
              <Transition
                as={Fragment}
                show={active.isShowing && active.activeNumber === index + 1}
                enter="transition-all duration-700 delay-200"
                enterFrom="max-h-0 opacity-0"
                enterTo="max-h-screen opacity-100"
                leave="transition-all duration-700 duration-200"
                leaveFrom="max-h-screen opacity-100"
                leaveTo="max-h-0 opacity-0">
                <Menu>
                  <div className="mt-5 pt-5 lg:mt-7.5 lg:pt-7.5 border-t border-t-black">
                    <p className="text-black txet-base lg:text-lg font-normal">{item.description}</p>
                  </div>
                </Menu>
              </Transition>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
