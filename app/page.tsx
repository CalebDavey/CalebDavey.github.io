'use client'

import React, {useEffect} from "react";
import Head from 'next/head';
import Background from './components/bg-spotlight';
import Scrollbar from './components/scrollIndicator';


export default function Home() {
  useEffect(() => {
    //beginBlink();
  }, [])

  const beginBlink = () => {
    const blinkElements = document.querySelectorAll(".blink");

    Array.from(blinkElements).forEach((el) => {
      let isVisible = true;

      setInterval(() => {
        isVisible = !isVisible;

        if (el instanceof HTMLElement) {
          el.style.visibility = isVisible ? "visible" : "hidden";
        }
      }, 900);
    });
  }

  return (
      <>
        <Head>
          <title>Caleb Davey</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
        </Head>
        <Scrollbar/>
        <Background>
          <main className="bg-zinc-950 snap-y snap-mandatory overflow-y-auto overflow-x-hidden h-screen">
            <div className="snap-center h-screen w-screen overflow-hidden select-none flex justify-center items-center flex-col">
              <div className="text-8xl font-light flex m-3">
                <h1 className="uppercase font-light">Hey</h1>
                <h1 className="blink">.</h1><h1>&nbsp;</h1>
                <h1 className="uppercase font-light">I'm Caleb</h1>
              </div>
            </div>
            <div className="snap-center h-screen w-screen overflow-hidden select-none flex justify-center items-center flex-col">
                <h1 className="text-4xl font-light">More coming soon</h1>
            </div>
          </main>
        </Background>
    </>
  )
}

