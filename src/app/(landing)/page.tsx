import Button from '@/components/ui/Button'
import { Github, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return (
    <div className='flex flex-col justify-center'>
        <nav className='h-16 z-50 sticky top-0 inset-x-0 backdrop-blur-sm bg-zinc-200/25'>
            <div className='max-w-7xl mx-auto h-full'>
                <Link href='luccaparadeda' className='flex gap-3 justify-center items-center h-full'>
                    <div className='relative h-8 w-8'>
                        <MapPin/>
                    </div>
                </Link>
            </div>
        </nav>
        <section className='flex items-center justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
            <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
                <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Bom desenvolvedor <br/> Utilizando as <span className='text-blue-950 animate-pulse'>melhores <br/> Tecnologias.</span></h1>
                <p className='max-w-[42rem] leading-normal text-gray-500 sm:text-xl sm:leading-8'>Não existe forma melhor de aprender do que praticando. Por conta disso levo que a consistencia vale mais do que qualquer certificado</p>
                <Button className='px-10'><Github/> Github </Button>
            </div>
        </section>
    </div>
  )
}

export default page