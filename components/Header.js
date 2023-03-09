import Image from 'next/image'
import { HomeIcon, MagnifyingGlassIcon, PlusIcon, StarIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <nav className='flex sticky bg-[#040714] bg-opacity-80 top-0 z-[1000] items-center px-10 md:px-12 h-16'>
            <a href='/'>
                <Image src='/images/anime_logo.png' alt='Page Logo' width={100} height={40} className='cursor-pointer' />
            </a>
            <div className='hidden ml-10 mt-1 md:flex items-center space-x-6'>
                <a href='/' className='header-link group'>
                    <HomeIcon className='h-4' />
                    <span className='span'>Hogar</span>
                </a>
                <a href='/search' className='header-link group'>
                    <MagnifyingGlassIcon className='h-4' />
                    <span className='span'>Buscar</span>
                </a>
                <a href='/watch-later' className='header-link group'>
                    <PlusIcon className='h-4' />
                    <span className='span'>Ver despues</span>
                </a>
                <a href='/series' className='header-link group'>
                    <StarIcon className='h-4' />
                    <span className='span'>Series</span>
                </a>
            </div>
            <div className='flex ml-8 mt-1 space-x-8 md:hidden'>
                <a href='/' className='header-link group'>
                    <span className='span'>
                        <HomeIcon className='h-5' />
                    </span>
                </a>
                <a href='/search' className='header-link group'>
                    <span className='span'>
                        <MagnifyingGlassIcon className='h-5' />
                    </span>
                </a>
                <a href='/watch-later' className='header-link group'>
                    <span className='span'>
                        <PlusIcon className='h-5' />
                    </span>
                </a>
                <a href='/series' className='header-link group'>
                    <span className='span'>
                        <StarIcon className='h-5' />
                    </span>
                </a>
            </div>
        </nav>
    )
}

export default Header
