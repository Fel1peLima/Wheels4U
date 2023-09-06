"use client";

import Image from "next/image";
import { CustomButton } from ".";



const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-black ">
    <div className="hero "> 
      <div className="flex-1 pt-36 padding-x text-white">
        <h1 className="hero__title">
          Encontre, reserve e alugue um carro rápido e fácil!!
        </h1>
      
        <p className="text-3xl pt-6 font-thin text-gray-300 ">
          Realize seu aluguel de carro com o nosso sistema simples e facil!! pediu, entregamos a chave.
        </p>
        
        <CustomButton
          title="Veja nosso catalogo"
          containerStyles="bg-purple-800 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hellcatroxo.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
        
      </div>
    </div>
    </div>
  );
};

export default Hero;