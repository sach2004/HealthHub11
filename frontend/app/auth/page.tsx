import { Input } from '@/components/ui/input';
import React from 'react';
import { API_URL } from '../consts';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import Nav from '@/components/base/nav';
import AudioPlay from '@/components/base/audio';

type Props = {};

export default async function AuthPage({}: Props) {
    async function handleLogin(formData: FormData) {
        "use server"
        const gov_id = formData.get('gov_id');

        const data = await fetch(API_URL + '/users/' + gov_id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const user = await data.json();

        if (user.error) {
            console.log(user.error);
        }

        if (user) {
            redirect('/user/' + user.user.id);
        }
    }
    return (
        <div>
            <div className="w-11/12 h-fit mt-10 ml-auto mr-auto flex gap-x-36 items-center justify-center relative z-10">
                <span
                    className={
                        'flex items-center justify-center w-20 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                       // (pos === 'first' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-arrow-right"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-20 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                        //(pos === 'second' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-person"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-20 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                       // (pos === 'third' && ' border-sky-500')
                    }
                >
                    <i className="bi bi-clipboard2-pulse text-4xl"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-20 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                        /*(pos === 'fourth' && ' border-sky-500')*/
                    }
                >
                     <i className="bi bi-camera-video text-4xl"></i>
                </span>

                <span
                    className={
                        'flex items-center justify-center w-20 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                        //(pos === 'fifth' && ' border-sky-500')
                    }
                >
                    <i className="bi bi-file-earmark-text text-4xl"></i>
                </span>
                <span
                    className={
                        'flex items-center justify-center w-20 h-20 bg-white rounded-full border-gray-300 border-8 ' 
                        //(pos === 'six' && ' border-sky-500')
                    }
                >
                    <i className="bi text-4xl bi-emoji-smile"></i>
                </span>
                
                
            </div>
            <span className="absolute h-2 w-[1150px] bg-gray-300 top-[80px] left-[380px] z-0"></span>
            <span className="absolute h-2 w-[250px] bg-sky-500 top-20 left-[400px] z-0"></span>
            
            <AudioPlay audio="2.mp3" />
            <form
                className="flex flex-col justify-center items-center mt-64 gap-y-5"
                action={handleLogin}
            >
                <Input
                    className="w-[500px] text-3xl px-6 py-9"
                    name="gov_id"
                    type="text"
                    placeholder="Aadhaar No."
                />
                <Button className="w-[500px] text-2xl" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}
