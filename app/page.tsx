"use client";
import { useState } from "react";
import { crimson } from "./layout";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex items-center justify-center w-screen h-screen gap-14">
      <div className="relative">
        {isOpen ? (
          <>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-0 cursor-pointer"
            >
              <img src="assets/close.svg" alt="" />
            </button>
            <img
              className="h-[250px] w-[450px] object-cover"
              src="assets/sofa.gif"
              alt=""
            />
          </>
        ) : (
          <>
            <button
              onClick={() => setIsOpen(true)}
              className="absolute right-0 cursor-pointer"
            >
              <img src="assets/360.svg" alt="" />
            </button>
            <img
              className="h-[250px] w-[450px] object-cover"
              src="assets/sofa.png"
              alt=""
            />
          </>
        )}

        {/* <img src="assets/sofa.gif" alt="" /> */}
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-xs font-light leading-[100%]">CÓDIGO: 42404</h4>
        <h1
          className={`${crimson.variable} font-crimson font-semibold text-3xl leading-[100%]`}
        >
          Sofá Margot II - Rosé
        </h1>
        <p className="opacity-75">R$ 4.000,00</p>
        <button className="px-4 py-2 text-xs border-[0.5px] rounded-full bg-transparent border-myBlue">
          ADICIONAR À CESTA
        </button>
      </div>
    </div>
  );
}
