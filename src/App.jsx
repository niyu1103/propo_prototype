import React, { useState, useEffect, useRef } from 'react';
import './style/player.css';
import './assets/mp3/20210424_105237_279_radiohistory_ep0517.mp3'

function App() {
  const [audioBuffer, setAudioBuffer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingSource, setPlayingSource] = useState(null);

  // 再描画の影響を受けない不変なオブジェクト
  const audioContext = useRef(null);

  // 初期化
  useEffect(() => {
    audioContext.current = new AudioContext();
    console.log(audioContext);
    var bufCache;

  // バッファの取得
  var request = new XMLHttpRequest();
  request.open('GET', './assets/mp3/20210424_105237_279_radiohistory_ep0517.mp3', true);

  // arraybufferで取得
  request.responseType = 'arraybuffer';

  request.onload = function () {
    // 受け取ったレスポンスを、AudioBufferに変換
    audioContext.current.decodeAudioData(request.response, function (buffer) {
      bufCache = buffer;
    });
  };
  request.send();
  }, [])



  // 略

  // 音を鳴らす
  var source = audioContext.current.createBufferSource();
  // 取得しておいたバッファを使う
  source.buffer = bufCache;
  source.connect(audioContext.current.destination);



  const handleClickPlay = () => {
    source.start(audioContext.current.currentTime);
  }
  const handleClickStop = () => {
    source.stop(audioContext.current.currentTime + source.buffer.duration);
  }

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
