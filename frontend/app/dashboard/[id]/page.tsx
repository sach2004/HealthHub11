import { API_URL } from '@/app/consts';
import AudioPlay from '@/components/base/audio';
import Nav from '@/components/base/nav';
import { Button } from '@/components/ui/button';
import React from 'react';
import nodemailer from 'nodemailer';

type Props = {
    params: { id: string };
};

export default async function Dashboard({ params: { id } }: Props) {
    const dash_req = await fetch(API_URL + '/patients/' + id, {
        method: 'GET',
    });

    const { patient } = await dash_req.json();

    const user_res = await fetch(API_URL + '/users/' + patient.gov_id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const { user } = await user_res.json();

     const mailContent = `
    <style>
      body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: 3px solid #000;
        font-size: 1.5rem;
        padding: 1rem;
        margin: 1rem;
      }
    </style>
    <h1>Medical Report for ${patient.name}</h1>
    <p>
      Name: ${patient.name}.
    </p>
    <p>
      GovID: ${patient.gov_id}.
    </p>
    <p>
        Problems: ${patient.problems}.
    </p>
    <p>
        Diagnosis: ${patient.diagnosis}.
    </p>
    <p>
        Medications: ${patient.medications}.
    </p>
    <p>
    Thanks for using Health Hub!
      <br />
      Noob Mailer
    </p>
  `;
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'noobsciencesmtp@gmail.com',
            pass: 'unyxipyspnnfgvbb',
        },
    });

    console.log(mailContent)

    const mailData = {
        from: 'noobsciencesmtp@gmail.com',
        to: user.email, // This is my public email address
        subject: `Hey ${user.name}! You've got mail from Health Hub`,
        html: mailContent,
    };

    try {
        await transporter.sendMail(mailData);
        console.log('Mail sent successfully');
    } catch (error) {
        console.error('Error: ', error);
    }

    return (
        <div>
            <Nav pos="fifth" />
            <div className="pt-14 flex flex-col justify-center items-center">
                <div className="w-2/5 text-2xl border-2 border-black p-5">
                    <h1 className="text-4xl font-bold pb-8">
                        Your Medical Report
                    </h1>
                    <AudioPlay audio="prescription.mp3" />
                    <div className="flex flex-col gap-y-4">
                        <p>
                            <span className="underline">Name:</span>
                            {'  '}
                            {patient.name}
                        </p>
                        <p>
                            <span className="underline">Gov ID:</span>
                            {'  '}
                            {patient.gov_id}
                        </p>
                        <p>
                            <span className="underline">Problems:</span>
                            {'  '}
                            {patient.problems}
                        </p>
                        <p>
                            <span className="underline">Diagnosis:</span>
                            {'  '}
                            {patient.diagnosis}
                        </p>
                        <p>
                            <span className="underline">Medications:</span>
                            {'  '}
                            {patient.medications}
                        </p>
                        <p>
                            <span className="underline">Notes:</span>
                            {'  '}
                            {patient.notes}
                        </p>
                    </div>
                </div>
                <p className="pt-5 text-xl">
                    Check your email for a copy of this report!
                </p>
                <Button className="text-xl mt-5">
                    <a className="px-3 py-4" href="/thanks">
                        Proceed
                    </a>
                </Button>
            </div>
        </div>
    );
}
