import React, { useState, useEffect, useRef } from 'react';
import './style/player.css';
import './assets/mp3/20210424_105237_279_radiohistory_ep0517.mp3'

function App() {
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [nowPlaying, setNowPlaying] = useState(null);
  const [playingSource, setPlayingSource] = useState(null);

  const audioContext = useRef(null);
  let ctx = audioContext.current;

  useEffect(() => {
    ctx = new AudioContext();
  }, []);

  // 音源を取得しAudioBuffer形式に変換して返す関数
  const setupSource = async () => {
    const response = await fetch(
      './assets/mp3/20210424_105237_279_radiohistory_ep0517.mp3'
    );

     console.log(response);
    const arrayBuffer = await response.arrayBuffer(

    );
     console.log(arrayBuffer);
    // Web Audio APIで使える形式に変換
    setAudioBuffer(await ctx.decodeAudioData(arrayBuffer));
     console.log(audioBuffer);
  };

  const play = (ctx, audioBuffer) => {
    console.log(audioBuffer);
    setPlayingSource(ctx.createBufferSource());
    // 変換されたバッファーを音源として設定
    playingSource.buffer = audioBuffer;
    // 出力につなげる
    playingSource.connect(ctx.destination);
    playingSource.start();
    setIsPlaying(true);
  };

  const handleClickPlay = async (e) => {
    console.log(isPlaying);
    if (isPlaying) return;
    // if(ctx.state === 'suspended'){
    //   ctx.resume();
    // }
    console.log('setupSource');
    const playing = await setupSource();
    console.log('playing');
    play(ctx, playing);
    console.log('Play');
  };

  const handleClickStop = async (e) => {
    console.log('stop'.isPlaying);
    playingSource?.stop();
    setIsPlaying(false);
  };

  return (
    <div className='App'>
      <div id='player' className='app'>
        <div id='audio_thumb'>
          <img
            className='ep_img'
            src='https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_280x280.jpg'
            width='160'
            height='160'
          />
          <i
            id='play'
            className='material-icons'
            onClick={handleClickPlay}
            style={{ display: isPlaying && 'initial' }}
          >
            play_circle_outline
          </i>
          <i
            id='stop'
            className='material-icons'
            onClick={handleClickStop}
            style={{ display: isPlaying || 'none' }}
          >
            pause_circle_outline
          </i>
        </div>
        <div id='audio_desc'>
          <div className='ep-date'>2021.05.11</div>
          <div className='ep-title'>
            0518_中国の第2三国志。智勇兼備・音容兼美のイケメン皇族蘭陵王は不敗の名将
            <span className='sp-nodisp'></span>
          </div>
          <div id='timebar'>
            <div id='timebar-bg'>
              <div
                id='timebar-past'
                style={{ backgroundColor: 'rgb(194, 44, 70)' }}
              >
                <div id='timebar-num'>0%</div>
              </div>
            </div>
          </div>
          <div>
            <span id='time_disp'>00 / 15</span>
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
}

export default App;
