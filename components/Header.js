import Image from 'next/image'
import Link from 'next/link'
import { HomeIcon, SearchIcon, PlusIcon, StarIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <div className='flex sticky bg-transparent top-0 z-[1000] items-center px-10 md:px-12 h-16'>
            <Image src='/images/anime_logo.png' width={100} height={40} className='cursor-pointer' />
            <div className='hidden ml-10 md:flex items-center space-x-6'>
                <Link href='/'>
                    <a className='header-link group'>
                        <HomeIcon className='h-4' />
                        <span className='span'>Hogar</span>
                    </a>
                </Link>
                <Link href='/buscar'>
                    <a className='header-link group'>
                        <SearchIcon className='h-4' />
                        <span className='span'>Buscar</span>
                    </a>
                </Link>
                <Link href='/ver-despues'>
                    <a className='header-link group'>
                        <PlusIcon className='h-4' />
                        <span className='span'>Ver despues</span>
                    </a>
                </Link>
                <Link href='/series'>
                    <a className='header-link group'>
                        <StarIcon className='h-4' />
                        <span className='span'>Series</span>
                    </a>
                </Link>
            </div>
            <button className='ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200'>Login</button>
        </div>
    )
}

export default Header