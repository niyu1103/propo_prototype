import React, {memo} from 'react';

export const AudioControls = memo(({
  isPlaying,
  onPlayClick,
}) => {
  return (
    <>
    {isPlaying ? (
      <i
        id='play'
        className='material-icons'
        onClick={() => onPlayClick(false)}
      >
        play_circle_outline
      </i>
    ) : (
      <i
        id='stop'
        className='material-icons'
        onClick={() => onPlayClick(true)}
      >
        pause_circle_outline
      </i>
    )}
    </>
  );
});
