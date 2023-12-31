import React from 'react'

const Logo = ({ color = 'black', width = 36, height = 36 }: { color?: string; width?: number; height?: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="currentColor"
      color={color}
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_524_42)">
        <path
          d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_524_42">
          <rect width="36" height="36" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Logo
