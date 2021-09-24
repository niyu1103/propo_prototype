import React, { useContext } from 'react';
import './style/player.css';
import './style/page.css';
import { BrowserRouter } from "react-router-dom"
import { AudioPlayer } from './components/AudioPlayer';
import { PlayList } from './components/PlayList';
// import tracks from './tracks';
import playList from './playList';
import { AudioPlayerList } from './components/AudioPlayerList';
import { Home } from './components/pages/Home';
import { Router } from './router/Router';
import { TrackContext } from "./providers/TrackProvider"

function App() {
  const { trackList } = useContext(TrackContext);
  console.log(trackList);
  return (
    <BrowserRouter>
      <Router />
      {trackList.length > 0 &&
        <AudioPlayerList />
      }
      {trackList.length > 0 &&
        <AudioPlayer />
      }
    </BrowserRouter>
  );
}

export default App;
