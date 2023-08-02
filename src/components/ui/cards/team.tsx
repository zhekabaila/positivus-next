import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

interface TeamCardProps {
  name: string
  profession: string
  description: string
  img: string
  link: string
}

const TeamCard = ({ name, profession, description, img, link }: TeamCardProps) => {
  return (
    <div className="flex flex-col h-full px-9 py-10 border border-dark border-solid rounded-11 shadow-[0_5px_0_0_#191A23]">
      <div className="relative flex gap-x-5">
        <div className="relative w-25 h-25 aspect-square rounded-full shadow-[5px_5px_0_0_#191A23]">
          <Image src={img} fill alt="" className="rounded-full" />
        </div>
        <div className="text-left flex flex-col justify-end">
          <h1 className="text-xl font-medium text-black">{name}</h1>
          <p className="text-lg font-normal text-black">{profession}</p>
        </div>
        <Link href={link} className="absolute top-0 right-0 p-2 bg-black rounded-full aspect-square">
          <FaLinkedinIn color="#B9FF66" size={16} />
        </Link>
      </div>
      <div className="border-t border-black pt-7 mt-7">
        <p className="text-lg font-normal text-black">{description}</p>
      </div>
    </div>
  )
}

export default TeamCard
