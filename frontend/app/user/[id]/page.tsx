import { API_URL } from '@/app/consts'
import AudioPlay from '@/components/base/audio'
import AuthComponent from '@/components/base/auth'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

type Props = {
    params: {id: string}
}

export default async function UserPage({
    params: {id}
}: Props) {

    const user_res = await fetch(API_URL + '/users/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const { user } = await user_res.json();

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
                        'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
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
            <span className="absolute h-2 w-[250px] bg-sky-500 top-20 left-[400px] z-0"></span>
        </div>
          <AudioPlay audio="3.mp3" />
          <div className="flex flex-col justify-center pt-20 items-center mt-[40px]">
              <h1 className="text-[70px] font-bold">
                  Hey 👋 <span className="text-sky-500">{user.name}!</span>
              </h1>
              <h2 className="pt-4 text-xl w-3/5 mt-[0px] text-center">
                  It is our pleasure to serve you today. However, before we
                  begin, please verify your details:
              </h2>
              <div className="text-2xl flex flex-col gap-3 pt-8">
                  <p>
                      <span className="font-bold">Name:</span> {user.name}
                  </p>
                  <p>
                      <span className="font-bold">Gov ID:</span> {user.id}
                  </p>
                  <p>
                      <span className="font-bold">Email:</span> {user.email}
                  </p>
              </div>
              <div>
                  <AuthComponent dob={user.dob} user_id={user.id} />
              </div>
          </div>
          <Toaster />
      </main>
  );
}