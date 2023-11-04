
'use client';
import Nav from "@/components/base/nav";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from 'react';

export default function Home() {
    const [audio] = useState(new Audio('/read.mp3'));
   

    const playAudio = () => {
        setTimeout(() => {
        audio.play();
        },);
    };

    const stopAudio = () => {
        audio.pause();
        audio.currentTime = 0;
    };
    useEffect(() => {
        // Cleanup the audio object when the component is unmounted
        return () => {
            stopAudio();
        };
    }, []); 

  return (
      <main className="flex flex-col justify-center items-center">
           <div>
            <div className="w-11/12 h-fit mt-10 ml-auto mr-auto flex gap-x-36 items-center justify-center relative z-10">
                <span
                    className={
                        'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                       // (pos === 'first' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-arrow-right"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-24 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                        //(pos === 'second' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-person"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-24 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                       // (pos === 'third' && ' border-sky-500')
                    }
                >
                    <i className="bi bi-clipboard2-pulse text-4xl"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-24 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                        /*(pos === 'fourth' && ' border-sky-500')*/
                    }
                >
                     <i className="bi bi-camera-video text-4xl"></i>
                </span>

                <span
                    className={
                        'flex items-center justify-center w-24 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                        //(pos === 'fifth' && ' border-sky-500')
                    }
                >
                   <i className="bi bi-file-earmark-text text-4xl"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-24 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                        //(pos === 'six' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-emoji-smile"></i>
                </span>
                
                
            </div>
            <span className="absolute h-2 w-[1150px] bg-gray-300 top-[80px] left-[380px] z-0"></span>
            <span className="absolute h-2  bg-sky-500 top-20 left-[400px] z-0"></span>
        </div>
          
          <div className="flex flex-col justify-center mt-[230px] items-center ">
              <h1 className="text-[98px] font-bold">
                  Welcome to <span className="text-sky-500">🩺 Health Hub</span>
              </h1>
              <Button className="mt-8 text-4xl p-5 py-8">
                  <a href="/auth">Get started</a>
              </Button>

              <button className=" absolute mt-8 text-2xl p-5 py-4 top-[800px] left-[10px] border-black border-2 rounded-md bg-black  text-white" onClick={playAudio}>
               Voice Assistant
            </button>
          </div>
      </main>
  );
}
