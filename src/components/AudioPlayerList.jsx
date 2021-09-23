import React, { memo, useEffect, useState } from 'react';

export const AudioPlayerList = memo((props) => {
  const { trackLists, deleteTrackList } = props;

  const onClickDelete = (num) => {
    const newItems = [...trackLists];
    newItems.splice(num, 1);
    deleteTrackList(newItems);
  };

  return (
    <>
      <div>
        <h2>AudioPlayerList</h2>
        <ul>
         {trackLists.map((trackList, index) => {
             return (
               <>
                 <li key={trackList.id}>{trackList.title}</li>
                 <button onClick={onClickDelete.bind(this, index)}>削除</button>
               </>
             );
          })}
        </ul>
      </div>
    </>
  );
});

