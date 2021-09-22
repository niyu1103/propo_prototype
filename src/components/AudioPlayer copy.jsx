import React, { useState, useEffect, useRef } from 'react';
import { AudioControls } from './AudioControls';
import '../assets/mp3/20210424_105237_279_radiohistory_ep0517.mp3';

export const AudioPlayer = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title, date, audioSrc, image, audioTime } = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  console.log(audioRef);

  const { duration } = audioRef.current;
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%';

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        // toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='App'>
      <div id='player' className='app'>
        <div id='audio_thumb'>
          <img className='ep_img' src={image} width='160' height='160' />
          <AudioControls isPlaying={isPlaying} onPlayClick={setIsPlaying} />
        </div>
        <div id='audio_desc'>
          <div className='ep-date'>{date}</div>
          <div className='ep-title'>
            {title}
            <span className='sp-nodisp'></span>
          </div>
          <div id='timebar'>
            <div id='timebar-bg'>
              <div
                id='timebar-past'
                style={{ backgroundColor: 'rgb(194, 44, 70)' }}
              >
                <div id='timebar-num'>{currentPercentage}</div>
              </div>
            </div>
          </div>
          <div>
            <span id='time_disp'>
              {duration} / {audioTime}
            </span>
            <p className='time_control_area'>
              <span>
                <img
                  id='playback'
                  src='https://propo.fm/image/rewind.png'
                  width='23'
                  alt='rewind'
                />
              </span>
              <span>
                <img
                  id='skip'
                  src='https://propo.fm/image/skip.png'
                  width='23'
                  alt='skip'
                />
              </span>
              <span id='speed_ctrl'>1.00x</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
