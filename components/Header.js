import Image from 'next/image'
import Link from 'next/link'
import { HomeIcon, SearchIcon, PlusIcon, StarIcon } from '@heroicons/react/solid'

const Header = () => {
    return (
        <nav className='flex sticky bg-[#040714] bg-opacity-80 top-0 z-[1000] items-center px-10 md:px-12 h-16'>
            <Link href='/'>
                <a>
                    <Image src='/images/anime_logo.png' width={100} height={40} className='cursor-pointer' />
                </a>
            </Link>
            <div className='hidden ml-10 mt-1 md:flex items-center space-x-6'>
                <Link href='/'>
                    <a className='header-link group'>
                        <HomeIcon className='h-4' />
                        <span className='span'>Hogar</span>
                    </a>
                </Link>
                <Link href='/search'>
                    <a className='header-link group'>
                        <SearchIcon className='h-4' />
                        <span className='span'>Buscar</span>
                    </a>
                </Link>
                <Link href='/watch-later'>
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
            <div className='flex ml-8 mt-1 space-x-8 md:hidden'>
                <Link href='/'>
                    <a className='header-link group'>
                        <span className='span'>
                            <HomeIcon className='h-5' />
                        </span>
                    </a>
                </Link>
                <Link href='/search'>
                    <a className='header-link group'>
                        <span className='span'>
                            <SearchIcon className='h-5' />
                        </span>
                    </a>
                </Link>
                <Link href='/watch-later'>
                    <a className='header-link group'>
                        <span className='span'>
                            <PlusIcon className='h-5' />
                        </span>
                    </a>
                </Link>
                <Link href='/series'>
                    <a className='header-link group'>
                        <span className='span'>
                            <StarIcon className='h-5' />
                        </span>
                    </a>
                </Link>
            </div>
        </nav>
    )
}

export default Header
