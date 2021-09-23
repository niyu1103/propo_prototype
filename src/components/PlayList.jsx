import React, { memo } from 'react';

export const PlayList = memo((props) => {

const {playList, trackList, addTrackList} = props;

const onClickAdd = (num) => {
    const addItem =  playList.find((v) => v.id === num);
    const newItems = [...trackList, addItem];
    addTrackList(newItems);
  }

  return (
    <>
    <div>
      <ul>
        <li>エピソード<span>0518</span><button onClick={onClickAdd.bind(this,'518')}>追加</button></li>
        <li>エピソード<span>0517</span><button onClick={onClickAdd.bind(this,'517')}>追加</button></li>
        <li>エピソード<span>0516</span><button onClick={onClickAdd.bind(this,'516')}>追加</button></li>
        <li>エピソード<span>0515</span><button onClick={onClickAdd.bind(this,'515')}>追加</button></li>
        <li>エピソード<span>0514</span><button onClick={onClickAdd.bind(this,'514')}>追加</button></li>
      </ul>
    </div>
    </>
  );
});
