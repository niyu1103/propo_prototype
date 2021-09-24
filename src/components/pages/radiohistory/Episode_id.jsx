import React, { memo, useContext, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import playList from '../../../playList';
import {TrackContext} from '../../../providers/TrackProvider'

export const Episode_id = memo(() => {
  const { id } = useParams();
  const { trackList, setTrackList } = useContext(TrackContext);
console.log(playList);

const currentItem =  playList.find((v) => v.id === id);
console.log(currentItem);
  const onClickAdd = () => {

    const newItems = [...trackList, currentItem];
    setTrackList(newItems);
  }


  return (
     <section className="page">
      <div class="mvContainer__box clearfix is_black">
        <div class="mvContainer__box__img">
          <a href="#">
            <img src="https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_540x540.jpg" width="170" height="170" alt="ラジレキ 〜ラジオ歴史小話〜 " />
          </a>
        </div>
        <div class="mvContainerSmall__box__desc">
          <h1 class="mvContainer__box__desc__title">Episode{id}</h1>
          <p class="mvContainer__box__desc__detail" >
            {currentItem.title}
          </p>
          <button onClick={onClickAdd} className="mvAddBtn">追加</button>
        </div>

      </div>
      <div className="mvContainer__box2">
         {/* <div>エピソード<span>{id}</span><button onClick={onClickAdd} className="mvAddBtn">追加</button></div> */}
         <Link to="/radiohistory" className="arrow_article_btn">全てのエピソード</Link>
      </div>
    </section>
  )
}

)