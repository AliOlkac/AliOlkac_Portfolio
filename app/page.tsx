import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Hero bileşeni kritik olduğu için normal import ile yükleniyor
import Hero from '@/components/sections/Hero'

// Diğer bileşenler lazy loading ile yükleniyor
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="h-screen flex items-center justify-center">
    <span className="loader"></span>
  </div>
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">
        <span className="loader"></span>
      </div>}>
        <About />
      </Suspense>
      {/* Diğer section'lar buraya eklenecek */}
    </main>
  )
} 