'use client'

import React, { useState } from 'react'

import { teams } from '@/constants/app'
import { cn } from '@/lib/utils'

import Container from '@/components/layout/container'
import TeamCard from '@/components/ui/cards/team'
import Button from '@/components/ui/button'
import HeaderSection from '@/components/ui/headerSection'

export const TeamsSection = () => {
  const [cardCount, setCardCount] = useState<number>(3)

  return (
    <Container className="mt-15 lg:mt-21.5">
      <div className="space-y-10 lg:space-y-21.5">
        <HeaderSection
          title="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-7.5 lg:gap-10">
          {teams.slice(0, cardCount).map((item, index) => (
            <div key={index}>
              <TeamCard {...item} />
            </div>
          ))}
        </div>
      </div>
      <div className={cn('flex justify-end items-center mt-10', cardCount >= teams.length && 'hidden')}>
        <Button
          type="button"
          text="See all team"
          variant="dark"
          onClick={() => setCardCount((e) => e + 3)}
          className="py-5 px-9 text-xl font-normal wfull lg:w-auto"
          rounded="xl"
        />
      </div>
    </Container>
  )
}
