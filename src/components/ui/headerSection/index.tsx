import React from 'react'

interface IProps {
  title: string
  description: string
}

const HeaderSection = ({ title, description }: IProps) => {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row gap-y-7.5 lg:gap-x-10">
      <div className="text-center lg:text-left">
        <h2 className="text-black inline text-center lg:text-left text-4xl lg:text-40px font-medium lg:leading-normal bg-primary px-2 rounded-lg">
          {title}
        </h2>
      </div>
      <p className="text-black text-center font-normal text-lg lg:w-125">{description}</p>
    </div>
  )
}

export default HeaderSection
