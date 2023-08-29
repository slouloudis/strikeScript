import Image from 'next/image'
import LandingPage from '@/components/layouts/LandingPage'
import FullScreenDiv from '@/components/layouts/FullScreenDiv'

export default function Home() {
  return (
    <main className="min-h-screen object-fill bg-hero h-full">
      <div className='h-full'>
        <LandingPage />
        <FullScreenDiv />
      </div>
    </main>
  )
}

// bg-vDark-grey - this goes in main
//