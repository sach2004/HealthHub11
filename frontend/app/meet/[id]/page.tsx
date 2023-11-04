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
                        <div className="w-1/3 p-3 mb-[20px] border-solid border-black">
                            <form action={handleSubmit} className="w-full bg-white">
                                <h2 className="text-2xl font-semibold mb-6 mt-[20px]">
                                    Prescription Form
                                </h2>
                                <div className="mb-4">
                                    <label
                                        htmlFor="patientName"
                                        className="block text-gray-600 text-sm font-semibold mb-2"
                                    >
                                        Patient Name
                                    </label>
                                    <Input
                                        type="text"
                                        id="patientName"
                                        name="patientName"
                                        disabled
                                        defaultValue={user.name}
                                        className="w-4/5 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="Enter patient's name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="doctorName"
                                        className="block text-gray-600 text-sm font-semibold mb-2"
                                    >
                                        Doctor Name
                                    </label>
                                    <Input
                                        type="text"
                                        id="doctorName"
                                        disabled
                                        defaultValue={'Ram Kishan'}
                                        name="doctorName"
                                        className="w-4/5 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="Enter doctor's name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="problem"
                                        className="block text-gray-600 text-sm font-semibold mb-2"
                                    >
                                        Problem
                                    </label>
                                    <Textarea
                                        id="problem"
                                        name="problem"
                                        className="w-4/5 h-32 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="Enter the problem"
                                    ></Textarea>
                                </div>
                                <div className="mb-4">
                                    <label
                                        htmlFor="problem"
                                        className="block text-gray-600 text-sm font-semibold mb-2"
                                    >
                                        Diagnosis
                                    </label>
                                    <Textarea
                                        id="diagnosis"
                                        name="diagnosis"
                                        className="w-4/5 h-32 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="Enter the Diagnosis"
                                    ></Textarea>
                                </div>
        
                                <div className="mt-6">
                                <label
                                        htmlFor="problem"
                                        className="block text-gray-600 text-sm font-semibold mb-2"
                                    >
                                        Medications
                                    </label>
                                    <Textarea
                                        id="medicationNames"
                                        className="w-4/5 h-32 px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                                        placeholder="Enter medication names and press Enter"
                                    ></Textarea>
                                    <ul
                                        id="medicationList"
                                        className="list-disc pl-6 mt-4 text-gray-600"
                                    ></ul>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-black my-8 w-4/5 p-3 text-white text-2xl rounded-md"
                                >
                                    Done
                                </button>
                            </form>
                        </div>
                        <div className="w-1/2 mb-[100px]">
                            <Jitsi user={user} />
                        </div>
                    </div>
                </main>
    );
}
