import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LearnMoreButton from '../learnMore'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  icon: string
  link: string
  bgColor?: 'primary' | 'secondary' | 'dark'
  bgText?: 'primary' | 'white' | 'dark'
}

const ServiceCard = ({ title, icon, link, bgColor = 'primary', bgText = 'white' }: ServiceCardProps) => {
  return (
    <div
      className={`flex justify-between p-12.5 border border-solid border-dark rounded-45px shadow-[0_5px_0_0_#191A23] bg-${bgColor}`}>
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className={`text-3xl font-medium text-black bg-${bgText} px-2 rounded-lg leading-9 inline`}>{title}</h3>
        </div>
        <Link href={link} className="flex items-center gap-x-4">
          <LearnMoreButton
            circleColor={bgColor === 'dark' ? '#B9FF66' : 'black'}
            arrowColor={bgColor !== 'dark' ? '#B9FF66' : 'black'}
          />
          <p className={cn('text-xl font-normal', bgColor === 'dark' ? 'text-white' : 'text-black')}>Learn more</p>
        </Link>
      </div>
      <div className="aspect-square">
        <Image src={icon} width={210} height={195} alt="" />
      </div>
    </div>
  )
}

export default ServiceCard
