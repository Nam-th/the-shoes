import Image from 'next/image'
import Banner from '@/components/banner'
import Categories from '@/components/categories'
import AboutUs from '@/components/about'

export default function Home() {
  return (
    <div>
        <Banner/>
        <AboutUs/>
        <Categories/>
    </div>
  )
}


