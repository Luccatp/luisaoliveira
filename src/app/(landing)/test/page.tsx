import Button from '@/components/ui/Button'
import { Activity, AlignRight, ArrowBigRightDash, Loader2 } from 'lucide-react'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
    return(
        <div className='mx-9'>
            <nav className='h-10 flex justify-between bg-indigo-950 rounded-2xl my-9 px-4 py-2'>
                <div className='flex gap-4'>
                    <Activity color='white' className='hidden md:block'/>
                    <h2 className='text-base font-bold text-indigo-50'>Lucca Paradeda</h2>
                </div>
                <AlignRight color='white' className='hover:cursor-pointer'/>
            </nav>
            <section className='flex flex-col'>
                <div className='flex flex-col gap-4 '>
                    <h1 className='text-5xl font-bold w-fit relative'>Hi, I am <Loader2 className='absolute -right-5 top-0 animate-spin -z-10'/> <br/> <span className='text-indigo-600 animate-pulse'>Lucca </span></h1>
                    <p className='text-gray-500'>I am a fullstack developer, with emphasis on frontend. Most of my work comes from my experience in brazilian companies and online courses, I am currently persuing my bachaleors degree on software Engeneering at PUCRS university</p>
                    <Button className='w-fit'>Contact Me <ArrowBigRightDash /></Button>
                </div>
            </section>
        </div>
    )
}

export default page