import React from 'react'
import Image from 'next/image'

export default function LandingPage() {
  return (
      <div className='h-full w-full'>
        <div className="grid grid-cols-8 grid-custom-rows gap-3 w-full h-full">
            <div className={`row-span-3 iceland-prose`}>Your selected avatar pulsates with infinite potential in this neo-digital era. Your touch transforms pixels into prowess, steering them towards unmatched victories. Give your all, command with precision, and your digital warrior will resonate, echoing back your dedication with legendary moves. Dive deep into the matrix of modern combat, and let every tap, swipe, and gesture craft your legacy in the virtual arena of tomorrow.
</div>
            <div className="col-span-6 col-start-3 scale-275 flex items-center"><Image src='/landingpage-assets/Tekken-Title.png' alt='Tekken Notes' width={1000} height={600}/>Notes<Image className='scale-120' src='/landingpage-assets/prettystar.png' width={100} height={100} alt='a decorative star'/></div>
            <div className="col-start-6">Notes</div>
            <div className="row-span-3 col-start-8">5</div>
            <div className="col-start-3 row-start-2">6</div>
            <div className="col-start-4 row-start-2">7</div>
            <div className="col-start-5 row-start-2">8</div>
            <div className="col-start-6 row-start-2">9</div>
            <div className="col-span-2 col-start-4 row-start-3">10</div>
            <div className="col-start-7 row-start-3">12</div>
        </div>
    </div>
  )
}
