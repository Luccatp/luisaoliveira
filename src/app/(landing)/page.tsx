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
        <section className='flex items-center justify-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 bg-slate-100'>
            <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
                <h1 className='font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Stack</h1>
                <p className='max-w-[42rem] leading-normal text-gray-500 sm:text-xl sm:leading-8'>Tenho conhecimento de outras stacks porém a mais atual é essa.</p>
                <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
                    <div className="relative overflow-hidden rounded-lg border bg-white p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <svg className="h-12 w-12 text-blue-600" viewBox="0 0 256 256"><g><path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z"></path></g></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Next.js 13</h3>
                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI, API routes, ...</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-white p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <svg className="h-12 w-12 text-blue-600" fill="currentColor" viewBox="0 0 512.000000 512.000000"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M388 5104 c-185 -44 -329 -189 -373 -376 -22 -95 -22 -4241 0 -4336 45 -189 188 -332 377 -377 55 -13 347 -15 2164 -15 1380 0 2120 3 2155 10 190 36 348 189 394 382 22 95 22 4241 0 4336 -46 193 -204 346 -394 382 -35 7 -773 10 -2160 9 -1759 -1 -2115 -3 -2163 -15z m4022 -2392 c52 -11 118 -29 145 -39 l50 -19 3 -232 c1 -128 0 -232 -3 -232 -3 0 -48 20 -99 45 -143 70 -262 97 -426 99 -151 1 -212 -12 -292 -63 -112 -71 -118 -217 -13 -310 61 -53 112 -81 315 -173 253 -115 336 -164 435 -263 135 -133 180 -257 172 -470 -3 -99 -9 -133 -32 -195 -70 -190 -199 -309 -412 -380 -147 -49 -266 -63 -498 -57 -225 5 -346 25 -495 80 l-85 32 -3 257 -2 258 52 -40 c250 -190 651 -247 850 -121 64 41 92 95 86 172 -9 127 -106 203 -438 344 -192 81 -280 135 -381 235 -93 92 -135 163 -164 275 -19 76 -19 241 0 323 61 259 296 436 650 491 105 17 476 6 585 -17z m-1440 -227 l0 -205 -320 0 -320 0 0 -915 0 -915 -255 0 -255 0 -2 913 -3 912 -317 3 -318 2 0 205 0 205 895 0 895 0 0 -205z"></path></g></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">TypeScript</h3>
                                <p className="text-sm">Código de facil manutenção e tipagens coerentes, utilizadas da forma certa no lugar certo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg border bg-white p-2">
                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="h-12 w-12 text-zinc-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"></path></svg>
                            <div className="space-y-2">
                                <h3 className="font-bold">Prisma</h3>
                                <p className="text-sm text-muted-foreground">Uma ORM de nova geração com uma modelagem de dados intuitiva. Com tipagem forte.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default page