import React from 'react'
import Google from '../assets/imgs/google-1-1.svg';
import BlackRock from '../assets/imgs/blackrock-logo-1.svg';
import CocaCola from '../assets/imgs/coca-cola-2021.svg';
import JPMorgan from '../assets/imgs/jp-morgan.svg';
import Microsoft from '../assets/imgs/microsoft-6.svg';
import Nike from '../assets/imgs/nike-11.svg';
import Nvidia from '../assets/imgs/nvidia.svg';
import Tesla from '../assets/imgs/tesla-motors-1.svg'


const Marquee = () => {
  return (
    <>
    <main className={`bg-white flex flex-col items-center justify-center gap-10 py-12 px-5 md:gap-14`}>
      <h1>We're not  even out yet, but they trust us</h1>
      <section className={`relative flex items-center justify-center overflow-x-hidden`}>
        <div className={`grid grid-cols-8 items-center justify-center gap-4 md:gap-14  animate-marquee whitespace-nowrap`}>
          <img src={Google} alt="Google Logo" />
          <img src={BlackRock} alt="BlackRock Logo" />
          <img src={CocaCola} alt="CocaCola Logo" />
          <img src={JPMorgan} alt="JPMorgan Logo" />
          <img src={Microsoft} alt="Microsoft Logo" />
          <img src={Nike} alt="Nike Logo" />
          <img src={Nvidia} alt="Nvidia Logo" />
          <img src={Tesla} alt="Tesla Logo" />
        </div>

        <div className={`grid grid-cols-8 items-center justify-center gap-4 pl-4 animate-marqueeSec whitespace-nowrap absolute md:gap-14`}>
          <img src={Google} alt="Google Logo" />
          <img src={BlackRock} alt="BlackRock Logo" />
          <img src={CocaCola} alt="CocaCola Logo" />
          <img src={JPMorgan} alt="JPMorgan Logo" />
          <img src={Microsoft} alt="Microsoft Logo" />
          <img src={Nike} alt="Nike Logo" />
          <img src={Nvidia} alt="Nvidia Logo" />
          <img src={Tesla} alt="Tesla Logo" />
        </div>
      </section>
    </main>
    </>
  )
}

export default Marquee