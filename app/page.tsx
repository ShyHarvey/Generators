"use client"
import React, { useState, useRef, useEffect } from "react"

import { gsap } from "gsap"
import TextPlugin from "gsap/TextPlugin"
// import { SplitText } from "gsap-trial/SplitText"



export default function Home() {
  const [compliment, setCompliment] = useState('Hello, generators')
  let com = useRef(null)
  gsap.registerPlugin(TextPlugin)

  useEffect(() => {

    gsap.to(com.current, {
      duration: 2,
      text: `${compliment}`,
      ease: "none"
    });

  }, [compliment])



  const getCompliment = () => {
    fetch("https://complimentr.com/api ")
      .then((response) => response.json())
      .then((data) => setCompliment(data.compliment))
      .then(() => console.log(compliment))

  }
  return (
    <main >
      <div className="min-h-screen bg-matrix-black">
        <div className="container  mx-auto p-4">
          <div className="h-96">

            <div ref={com} id="compliment" className='flex flex-row flex-wrap text-5xl md:text-7xl xl:text-8xl max-w-full 
          font-bold bg-clip-text text-transparent font-russo text-shadow
           shadow-matrix-light bg-gradient-to-r from-yellow-300 via-red-700
               to-blue-600 
               ' >

            </div>
          </div>
          <button
            onClick={getCompliment}
            className="mt-10 inline-block rounded px-6 py-3 font-mononoki  text-xl text-matrix-black
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
