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

 // イベントコールバック
   const handleChangeFile = async (event) => {
    const _file =  await fetch(
      './assets/mp3/20210424_105237_279_radiohistory_ep0517.mp3'
    );
    // const _file =  event.target.files[0];
    console.log(_file);
     const _audioBuffer = await audioContext.current.decodeAudioData(
      await _file.arrayBuffer()
    );
    console.log(_audioBuffer);
    setAudioBuffer(_audioBuffer);
     console.log(audioContext);
  };

   const handleClickPlay = () => {
    // 自動再生ブロックにより停止されたオーディオを再開させる
    // if (audioContext.current.state === "suspended") {
    //   audioContext.current.resume();
    // }

    // ソースノード生成 ＋ 音声を設定
    const sourceNode = audioContext.current.createBufferSource();
    sourceNode.buffer = audioBuffer;

    // 出力先に接続
    sourceNode.connect(audioContext.current.destination);

    // 再生発火
    sourceNode.start();
  };

  // const handleClickPlay = async (e) => {
  //   console.log(isPlaying);
  //   if (isPlaying) return;
  //   // if(ctx.state === 'suspended'){
  //   //   ctx.resume();
  //   // }
  //   console.log('setupSource');
  //   const playing = await setupSource();
  //   console.log('playing');
  //   play(ctx, playing);
  //   console.log('Play');
  // };

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
            className='ep_img' onClick={handleChangeFile}
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
