import React from 'react'

interface IProps {
  title: string
  description: string
}

const HeaderSection = ({ title, description }: IProps) => {
  return (
    <div className="flex items-center justify-center lg:justify-start flex-col lg:flex-row gap-y-7.5 lg:gap-x-10">
      <h2 className="text-black inline text-center lg:text-left text-4xl lg:text-40px font-medium lg:leading-normal bg-primary px-2 rounded-lg">
        {title}
      </h2>
      <p className="text-black text-center lg:text-left font-normal text-lg lg:w-125">{description}</p>
    </div>
  )
}

export default HeaderSection
