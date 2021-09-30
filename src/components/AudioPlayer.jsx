import React, { memo, useState, useEffect, useRef, useContext } from 'react';
import { AudioControls } from './AudioControls';
import {TrackContext} from "../providers/TrackProvider"


export const AudioPlayer = memo(() => {
  // const {tracks,setTracks,trackIndex,setTrackIndex} =props;
const { trackList, setTrackList, trackIndex, setTrackIndex,isPlaying, setIsPlaying,firstTimeReady, setFirstTimeReady } = useContext(TrackContext);

  console.log(trackList)
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness
  const { title, created_at, file_url, image, file_duration } = trackList[0];
  console.log(file_url);
  console.log(trackIndex);

  // Refs
  const audioRef = useRef(new Audio(file_url));
  const intervalRef = useRef();
  const isReady = useRef(false);
  console.log("audioRef",audioRef);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${Math.floor((trackProgress / duration) * 100)}%`
    : '0%';

  const parseTime = (time) => {
    let returnTime;
    let second = ('0' + Math.floor(time % 60)).slice(-2);
    let minutes = ('0' + Math.floor((time / 60) % 60)).slice(-2);
    let hour = ('0' + Math.floor(time / 60 / 60)).slice(-2);
    returnTime = hour + ':' + minutes + ':' + second;
    return returnTime;
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
        const newItems = [...trackList];
        newItems.shift(); //再生終了のものを削除
        setTrackList(newItems);
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(trackList.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < trackList.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const timeBarStyle = {
    width: currentPercentage,
  };

  //戻るボタン
  const onClickPlayBack = () => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = audioRef.current.currentTime - 15;
    setTrackProgress(audioRef.current.currentTime);
    startTimer();
  };

  //スキップボタン
  const onClickPlaySkip = () => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = audioRef.current.currentTime + 30;
    setTrackProgress(audioRef.current.currentTime);
    startTimer();
  };
  console.log(audioRef.current.currentTime);

  //再生スピード
  const onClickSpeedCtrl = () => {
    const SPEED_NUM_ARY = [1.0, 1.3, 1.5, 2.0, 0.5, 0.7];
    let now_speed = audioRef.current.playbackRate;
    let next_speed = SPEED_NUM_ARY[0];
    let matched_flg = false;
    // マッチした次の値をセット
    for (var i = 0; i < SPEED_NUM_ARY.length; i++) {
      if (SPEED_NUM_ARY[i] === now_speed) {
        matched_flg = true;
        continue;
      }
      if (matched_flg) {
        next_speed = SPEED_NUM_ARY[i];
        break;
      }
    }
    audioRef.current.playbackRate = next_speed;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing trackList
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(file_url);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current || firstTimeReady) {
console.log('レディー');
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
console.log('NOTレディー');
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [file_url,trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
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
          <div className='ep-date'>{created_at}</div>
          <div className='ep-title'>
            {title}
            <span className='sp-nodisp'></span>
          </div>
          <div id='timebar'>
            <div id='timebar-bg'>
              <div id='timebar-past' style={timeBarStyle}>
                <div id='timebar-num'>{currentPercentage}</div>
              </div>
            </div>
          </div>
          <div>
            <span id='time_disp'>
              {parseTime(audioRef.current.currentTime)} / {parseTime(file_duration)}
            </span>
            {/* <TimeControl currentTime={audioRef.current.currentTime} />
             */}
            <p className='time_control_area'>
              <span>
                <img
                  id='playback'
                  onClick={onClickPlayBack}
                  src='https://propo.fm/image/rewind.png'
                  width='23'
                  alt='rewind'
                />
              </span>
              <span>
                <img
                  id='skip'
                  onClick={onClickPlaySkip}
                  src='https://propo.fm/image/skip.png'
                  width='23'
                  alt='skip'
                />
              </span>
              <span id='speed_ctrl' onClick={onClickSpeedCtrl}>
                {audioRef.current.playbackRate.toFixed(2)}x
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});
