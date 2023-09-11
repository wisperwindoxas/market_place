import { FC } from 'react'
import { sidebar } from './sidebar.data'
import Link from 'next/link'
import Image from 'next/image'

const SideBar: FC = () => {
  return <div className='w-[300px] h-screen'>
    <div className='w-full p-5 bg-white rounded-xl flex flex-col gap-5 '>
      {sidebar.map((item) => {
        return (
          <Link href={item.link} className='flex items-center gap-5 p-3 hover:bg-slate-100 transition-all rounded-xl'>
            <Image src={item.icons} width={32} height={32} alt={item.title} />
            <p className='only:text-red-600'>{item.title}</p>
          </Link>
        )
      })}
    </div>
  </div>
}

export default SideBar