"use client"
import React, { useState, useRef, useLayoutEffect } from "react"

import { gsap } from "gsap"
import SplitType from 'split-type'
import TextPlugin from "gsap/TextPlugin"


export default function Home() {
  const [compliment, setCompliment] = useState('Do u want a compliment?')
  let com = useRef(null)
  gsap.registerPlugin(TextPlugin)

  useLayoutEffect(() => {
    let splitCompliment = SplitType.create('#title')
    gsap.from(splitCompliment.chars, { duration: 2, y: 100, autoAlpha: 0, stagger: 0.1, ease: 'elastic' });
  }, [])

  useLayoutEffect(() => {
    gsap.to(com.current, {
      duration: 2,
      text: `${compliment}`,
      ease: "none"
    });

  }, [compliment])


  const getCompliment = () => {
    fetch("https://complimentr.com/api ")
      .then((response) => response.json())
      .then((data) => setCompliment(data.compliment.toUpperCase()))
  }

  return (
    <main >
      <div className="min-h-screen bg-matrix-black">
        <div className="container  mx-auto p-4">
          <div id="title" className='background-animate flex flex-row flex-wrap 
          text-3xl md:text-5xl xl:text-6xl max-w-full 
          font-bold bg-clip-text text-transparent font-russo text-shadow
          shadow-matrix-light bg-gradient-to-r from-yellow-300 via-red-700
          to-blue-600 
          ' >
            Compliment generator
          </div>
          <div className="h-96">
            <div ref={com} id="compliment" className='background-animate flex flex-row flex-wrap 
           mt-2 text-4xl md:text-7xl xl:text-8xl max-w-full 
          font-bold bg-clip-text text-transparent font-russo text-shadow
           shadow-matrix-light bg-gradient-to-r from-yellow-300 via-red-700
               to-blue-600 ' >

            </div>
          </div>
          <button
            onClick={getCompliment}
            className="mt-10 inline-block rounded px-6 py-3 font-mononoki  text-3xl text-matrix-black
            border-solid border-2 border-sky-500 hover:shadow-md hover:shadow-sky-400
              uppercase leading-normal shadow-md 
              transition duration-150 ease-in-out bg-gradient-to-r
               from-indigo-600 via-amber-600 to-lime-700
                hover:from-indigo-400 hover:via-amber-300 hover:to-lime-400"
          >
            get compliment
          </button>
        </div>
      </div>
    </main>
  )
}
