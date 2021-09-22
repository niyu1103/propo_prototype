import React from 'react';
import './style/player.css';
import { AudioPlayer } from './components/AudioPlayer';
import { PlayList } from './components/PlayList';
import tracks from './tracks';

function App() {
  return (
    <>
      <AudioPlayer tracks={tracks} />
      <PlayList />
    </>
  );
}

export default App;
