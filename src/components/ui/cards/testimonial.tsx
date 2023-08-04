import React from 'react'

interface IProps {
  review: string
  name: string
  profession: string
}

const TestimonialCard = ({ review, name, profession }: IProps) => {
  return (
    <div className="space-y-10">
      <div className="relative bg-dark border-2 border-primary py-12 px-13 max-w-xl rounded-11.5">
        <p className="text-white text-lg font-normal">&quot; {review} &quot;</p>
        <div className="absolute left-13 -bottom-6.8">
          <div className="relative">
            <div className="h-0 w-0 border-r-27.5 border-t-27.5 border-l-27.5 border-solid border-r-transparent border-l-transparent border-b-transparent border-t-primary"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-0 w-0 border-r-25 border-t-25 border-l-25 border-solid border-r-transparent border-l-transparent border-b-transparent border-t-dark"></div>
          </div>
        </div>
      </div>
      <div className="pl-19">
        <h4 className="text-primary text-lg font-normal capitalize">{name}</h4>
        <p className="text-white text-lg font-normal">{profession}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
