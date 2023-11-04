'use client';

import { API_URL } from '@/app/consts';
import React from 'react';
import Image from 'next/image';
import Nav from '@/components/base/nav';
import AudioPlay from '@/components/base/audio';

type Props = {
    params: { id: string };
};

let chest =
    'CHEST RELATED: Pneumonia, Bronchitis, Asthma, Chronic Obstructive Pulmonary Disease (COPD), Lung Cancer, Pleurisy, Pulmonary Embolism, Pulmonary Fibrosis, Tuberculosis, Pleural Effusion, Chest Wall Injuries, Cystic Fibrosis, Pulmonary Hypertension, Interstitial Lung Disease, Mesothelioma.';
let head =
    'HEAD RELATED PROBLEMS: Headaches, Concussion, Sinusitis, Ear Problems, Eye Problems, Dental and Oral Health Issues, Neurological Conditions, Skull and Facial Trauma, Neck Problems, Facial Skin Conditions, Neurological Disorders, Allergies, Dental and Jaw Issues, Oral Cancer, Cranial Nerve Disorders, Temporal Arteritis';
let stomach =
    "STOMACH RELATED:Indigestion, Heartburn, Gastritis, Peptic Ulcer, Gastroesophageal Reflux Disease (GERD), Irritable Bowel Syndrome (IBS), Crohn's Disease, Ulcerative Colitis, Celiac Disease, Food Poisoning, Constipation, Diarrhea, Gastroenteritis, Gallstones, Pancreatitis.";
let hand =
    "HAND RELATED:Hand fractures, Hand infections,Carpal Tunnel Syndrome, Tendonitis, Arthritis, Trigger Finger, Dupuytren's Contracture, De Quervain's Tenosynovitis, Ganglion Cyst, Raynaud's Disease.";
let knee =
    'KNEE RELATED:Osteoarthritis, Rheumatoid Arthritis, Meniscus Tear, ACL (Anterior Cruciate Ligament) Injury, PCL (Posterior Cruciate Ligament) Injury, MCL (Medial Collateral Ligament) Injury, LCL (Lateral Collateral Ligament) Injury, Patellofemoral Pain Syndrome, Bursitis, IT Band Syndrome, Chondromalacia Patellae.';
let back =
    'BACK RELATED:Lower Back Pain, Upper Back Pain, Herniated Disc, Sciatica, Scoliosis, Spinal Stenosis, Kyphosis, Lordosis, Ankylosing Spondylitis, Degenerative Disc Disease, Compression Fracture, Pinched Nerve.';
let ankle =
    'ANKLE RELATED:Sprained Ankle, Achilles Tendonitis, Ankle Fracture, Plantar Fasciitis, Gout in the Ankle, Tarsal Tunnel Syndrome, Peroneal Tendonitis, Osteoarthritis of the Ankle, Ankle Bursitis, Ankle Impingement, High Ankle Sprain.';
let pp =
    "PRIVATE PARTS RELATED:Erectile Dysfunction, Premature Ejaculation, Testicular Cancer, Prostate Cancer, Pelvic Inflammatory Disease, Vaginal Yeast Infection, Uterine Fibroids, Endometriosis, Cervical Dysplasia, Penile Curvature, Genital Warts, Peyronie's Disease, Hypospadias, Priapism.";

export default function BodyPage({ params: { id } }: Props) {
    const [body, setBody] = React.useState('');

    const [problems, setProblems] = React.useState('');

    const [problemView, setProblemView] = React.useState(true);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //get the user info
        const user_res = await fetch(API_URL + '/users/' + id);

        const { user } = await user_res.json();
    }

    return (
        <main className="">
            
            <AudioPlay audio="body.mp3" />

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
                        'flex items-center justify-center w-20 h-20 bg-white rounded-full border-sky-500 border-8 ' 
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
            <span className="absolute h-2 w-[410px] bg-sky-500 top-20 left-[400px] z-0"></span>
        
        </div>
            
                <div
                    className={
                        'h-screen flex flex-col items-center justify-start relative '
                    }
                >
                    {/* <span className="absolute h-2 w-56 bg-blue-600 top-20 left-[400px] z-0"></span> */}
                    <div className="mt-14 h-3/5 w-2/5 relative z-100">
                        <Image
                            src="/image.png"
                            className="ml-10"
                            height={600}
                            width={1000}
                            alt="Image"
                        />

                        <button
                            id="head"
                            onClick={() => {
                                setBody('head');
                                setProblems(head);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[22px] left-[232px] cursor-pointer bg-transparent hover:bg-red-500 transition" 
                        ></button>
                        <button
                            id="chest"
                            onClick={() => {
                                setBody('chest');
                                setProblems(chest);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[140px] left-[233px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="stomach"
                            onClick={() => {
                                setBody('stomach');
                                setProblems(stomach);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[210px] left-[233px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="penis"
                            onClick={() => {
                                setBody('penis');
                                setProblems(pp);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[290px] left-[233px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="knee1"
                            onClick={() => {
                                setBody('knee');
                                setProblems(knee);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[390px] left-[210px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="knee2"
                            onClick={() => {
                                setBody('knee');
                                setProblems(knee);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[390px] left-[260px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="ankle2"
                            onClick={() => {
                                setBody('ankle');
                                setProblems(ankle);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[530px] left-[260px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="ankle1"
                            onClick={() => {
                                setBody('ankle');
                                setProblems(ankle);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[530px] left-[205px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="hand1"
                            onClick={() => {
                                setBody('hand');
                                setProblems(hand);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black  rounded-full top-[235px] left-[149px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="hand2"
                            onClick={() => {
                                setBody('hand');
                                setProblems(hand);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[235px] left-[313px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="back"
                            onClick={() => {
                                setBody('back');
                                setProblems(back);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[215px] left-[565px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="butt1"
                            onClick={() => {
                                setBody('butt');
                                setProblems(back);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[280px] left-[540px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                        <button
                            id="butt2"
                            onClick={() => {
                                setBody('butt');
                                setProblems(back);
                                setProblemView(false);
                            }}
                            className="absolute h-6 w-6 bg-black rounded-full top-[280px] left-[590px] cursor-pointer bg-transparent hover:bg-red-500 transition"
                        ></button>
                    </div>
                
                <div className="absolute mt-[110px] ml-[1200px]">
                <form
                    className="flex flex-col justify-center items-center"
                >
                    <div className="mt-10 w-1/3">
                        <textarea
                            className="p-2 border-2 border-black rounded-md w-[300px]"
                            name="problems"
                            id="problems"
                            value={problems}
                            onChange={(e) => setProblems(e.target.value)}
                            rows={10}
                        ></textarea>
                    </div>
                    <button className="bg-black mt-8 ml-[200px] p-3 text-white text-xl rounded-md w-full">
                        <a href={'/meet/' + id}>Submit</a>
                    </button>
                </form></div>
            </div>
        </main>
    );
}
