import React, {useState} from 'react';
import './style/player.css';
import { AudioPlayer } from './components/AudioPlayer';
import { PlayList } from './components/PlayList';
// import tracks from './tracks';
import playList from './playList';
import { AudioPlayerList } from './components/AudioPlayerList';

function App() {
   const [trackList, setTrackList] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);
console.log(trackList);
  return (
    <>
     {trackList.length > 0 &&
      <AudioPlayer tracks={trackList} setTracks={setTrackList}  trackIndex={trackIndex} setTrackIndex={setTrackIndex}/>
      }
      <PlayList playList={playList} addTrackList={setTrackList} trackList={trackList} />
      <AudioPlayerList trackLists={trackList} deleteTrackList={setTrackList}/>
    </>
  );
}

export default App;
