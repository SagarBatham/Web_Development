import React, { useRef, useState } from 'react'
import './Songs.css'
import { useEffect } from "react";
const Songs = ({ songsData }) => {

    const audioRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.src = "";
        }
        setCurrentIndex(null);
        setIsPlaying(false);
    }, [songsData]);
    const handlePlay = (index, url) => {
        if (currentIndex !== index) {
            audioRef.current.src = url;
            audioRef.current.play();
            setCurrentIndex(index);
            setIsPlaying(true);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const songUI = songsData?.map((e, idx) => (
        <div className='songUI' key={idx}>
            <div>
                <h3>Title: {e.title}</h3>
                <p>Artist: {e.Artist}</p>
            </div>

            <div className='btnPP'>
                <button onClick={() => {
                    if (currentIndex === idx && isPlaying) {
                        handlePause();
                    } else {
                        handlePlay(idx, e.url);
                    }
                }}>
                    {currentIndex === idx && isPlaying ? (
                        <div className="pauseIcon ri-pause-circle-line"></div>
                    ) : (
                        <div className="playIcon ri-play-line"></div>
                    )}
                </button>
            </div>
        </div>
    ));

    return (
        <div>
            <h4>Mood: {songsData[0]?.mood}</h4>
            <h1 className='header'>Suggested Songs</h1>

            <audio ref={audioRef}></audio>

            <div>
                {songUI}
            </div>
        </div>
    );
};

export default Songs;