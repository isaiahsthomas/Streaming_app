import Image from 'next/image'
import Sidebar from './pages/content'
import Carosel from './components/Carosel'
import Cardgrid from './components/Cardgrid'


export default function Home() {
  return (
    <main className="">
      <div>
        <Carosel />

      </div>
      <div>
        <h1 className='text-center'>Gallery</h1>
        <Cardgrid />
      </div>
    </main>
  )
}
