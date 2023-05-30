'use client'

import { FC, useState } from 'react'
import Button from './ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'

interface HamburguerMenuProps {
  options: {
    name: string
    href: string
    icon: React.ReactNode
  }[]
}

const HamburguerMenu: FC<HamburguerMenuProps> = ({options}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='sm:hidden'>
      <div className='h-full w-min'>
        <Menu onClick={() => setIsOpen((prev) => !prev)} className='hover:cursor-pointer'/>
      </div>
      { isOpen ? (
        <div className='absolute inset-x-0 top-20 bg-white p-8'>
          <div className='flex flex-col space-y-8'>
            {options.map((option) => (
              <div  key={option.name} className='flex gap-2'>
                {option.icon && option.icon}
                <Link href={option.href}>
                  {option.name} 
                </Link>
              </div>
            ))}
          </div>
        </div>
        ) : null}
    </div>
  )
}

export default HamburguerMenu