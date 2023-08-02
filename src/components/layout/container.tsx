import React from 'react'

import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return <section className={cn('px-5 lg:px-25', className)}>{children}</section>
}

export default Container
