import Image from 'next/image'
import LandingPage from '@/components/layouts/LandingPage'


export default function Home() {
  return (
    <main className="min-h-screen object-fill bg-hero h-full bg-vDark-grey">
      <div className='h-full'>
        <LandingPage />
      </div>
    </main>
  )
}

// bg-vDark-grey - this goes in main
//