"use client"

import { JITSI_URL } from '@/app/consts';
import JitsiMeeting from '@jitsi/react-sdk/lib/components/JitsiMeeting';
import React from 'react'

type Props = {
    user: any;
}

export default function Jitsi({user}: Props) {
    return (
        <JitsiMeeting
            roomName="PleaseUseAGoodRoomName"
            configOverwrite={{
                startWithAudioMuted: true,
                disableModeratorIndicator: true,
                startScreenSharing: true,
                enableEmailInStats: false,
            }}
            interfaceConfigOverwrite={{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
            }}
            userInfo={{
                email: user.email,
                displayName: user.name,
            }}
            onApiReady={(externalApi) => {
                // here you can attach custom event listeners to the Jitsi Meet External API
                // you can also store it locally to execute commands
            }}
            getIFrameRef={(iframeRef) => {
                iframeRef.style.height = '800px';
            }}
        />
    );
}