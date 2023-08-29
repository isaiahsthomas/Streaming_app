import { HiHome } from 'react-icons/hi'
import { BiMoviePlay } from 'react-icons/bi'
import { VscSettings } from 'react-icons/vsc'
import Image from 'next/image';
import Link from 'next/link';


const RouteDesc = [
    {
        title: 'Home',
        img: <HiHome />,
        href: '/'
    },
    {
        title: 'Gallery',
        img: <BiMoviePlay />,
        href: '/Gallery'
    },
    {
        title: 'Settings',
        img: <VscSettings />,
        href: '/Config'
    }
]




const Sidebar = async () => {
    return (
        <div className='flex'>
            {RouteDesc.map((route) => (
                <Link href={route.href}>
                    <div className="flex gap-2 mt-2 ml-3 mb-9 mr-3 p-8 transition items-center hover:text-gray-500 shadow bg-violet-700 border rounded-md space-x-1">
                        <div>{route.img}</div>
                        <h1>{route.title}</h1>
                    </div>
                </Link>

            ))}</div>
    );
}

export default Sidebar