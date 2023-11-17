import React from 'react'
import { twMerge } from 'tailwind-merge'
import clsx, { ClassValue } from 'clsx'


function cn(...inputs: ClassValue[]) {
    // merge tailwind css classes together by avoiding conflicts.
  return twMerge(clsx(inputs))
}

export default cn