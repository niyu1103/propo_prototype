import React, { memo, useContext } from 'react';
import { TrackContext } from '../providers/TrackProvider';

export const AudioPlayerList = memo(() => {
  const { trackList, setTrackList } = useContext(TrackContext);

  const onClickDelete = (num) => {
    const newItems = [...trackList];
    newItems.splice(num, 1);
    setTrackList(newItems);
  };

  return (
    <section className='page playList'>
      <div className='mvContainer__box2'>
        <h3>AudioPlayerList</h3>
        <ul>
          {trackList.map((trackItem, index) => {
            return (
              <>
                <li key={trackItem.id}>{trackItem.title}<button onClick={onClickDelete.bind(this, index)} className="mvDelBtn">削除</button></li>

              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
});
