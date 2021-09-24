import react, { createContext, useState } from "react";

export const TrackContext = createContext({});

export const TrackProvider = (props) => {
  const { children } = props;

  const [trackList, setTrackList] = useState([]);
  const [trackIndex, setTrackIndex] = useState(0);

  // const value = {
  //   trackList, setTrackList, trackIndex, setTrackIndex
  // };

  return (
    <TrackContext.Provider value={{trackList, setTrackList, trackIndex, setTrackIndex}}>
      {children}
    </TrackContext.Provider>
  )
}