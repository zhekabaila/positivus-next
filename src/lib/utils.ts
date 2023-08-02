import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
export function formatTwoDigits(num: number): string {
  return num < 10 ? '0' + num : num.toString()
}
