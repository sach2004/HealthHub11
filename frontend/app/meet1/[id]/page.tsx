import { API_URL, JITSI_URL } from '@/app/consts';
import React from 'react';
import Jitsi from './jitsi';
import Link from 'next/link';
import Nav from '@/components/base/nav';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { redirect } from 'next/navigation';
import AudioPlay from '@/components/base/audio';

type Props = {
    params: { id: string };
};

export default async function MeetPage({ params: { id } }: Props) {
    const user_res = await fetch(API_URL + '/users/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const { user } = await user_res.json();

    const handleSubmit = async (formdata: FormData) => {
        "use server"
        const problems = formdata.get('problem');
        const medication = formdata.get('medication');
        const diagnosis = formdata.get('diagnosis');

        const req = {
            name: user.name,
            gov_id: user.id,
            problems: problems,
            doctor: 'asak12',
            diagnosis,
            medications: medication,
            notes: '',
        };

        const res = await fetch(API_URL + '/patients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        });

        const { id }  = await res.json();

        redirect('/dashboard/' + id);
    };

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
                                'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
                               // (pos === 'third' && ' border-sky-500')
                            }
                        >
                            <i className="bi bi-clipboard2-pulse text-4xl"></i>
                        </span>
                        <span
                            className={
                                'flex items-center justify-center w-24 h-20 bg-white rounded-full border-sky-500 border-8 ' 
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
                    <span className="absolute h-2 w-[670px] bg-sky-500 top-20 left-[400px] z-0"></span>
                
                </div>
                <AudioPlay audio="5.mp3" />
                 
                    <div className="flex flex-row w-full justify-center items-end pt-[30px] ">
                        <div className="w-1/2 mb-[100px]">
                            <Jitsi user={user} />
                        </div>
                    </div>
                </main>
    );
}
