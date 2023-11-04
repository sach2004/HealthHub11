"use client"

import React, { useCallback, useEffect } from 'react';

type Props = {
    audio: string;
};

export default function AudioPlay({ audio }: Props) {
    const play_audio = useCallback(() => {
        const audio_player = new Audio("/" + audio);
        
        audio_player.src = "/" + audio;

        audio_player.play();
    }, [audio]);

    useEffect(() => {
        play_audio();
    }, [play_audio]);

    return <div></div>;
}
