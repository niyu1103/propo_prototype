import React, { memo, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import playList from '../../../playList';
import { TrackContext } from '../../../providers/TrackProvider';
import { ApiFetch } from '../../../components/ApiFetch'

export const Episode_id = memo(() => {
  const { id } = useParams();
  const { trackList, setTrackList, trackIndex, setTrackIndex, isPlaying, setIsPlaying, setFirstTimeReady } =
    useContext(TrackContext);
  console.log('page_id', id);
  console.log('trackList', trackList);

  const currentItem = ApiFetch(id);

  // const currentItem = playList.find((v) => v.id === id);
  console.log('currentItem', currentItem);

  const onClickAdd = () => {
    const newItems = [...trackList, currentItem];
    setTrackList(newItems);
  };

  const onClickPlay = () => {
    if (isPlaying) {
      console.log('trackIndex', trackIndex);
      const [firstItem, ...other] = trackList;
      const newItems = [currentItem, ...other];
      setTrackList(newItems);

    } else {
      if (trackList.length > 0) {
        if (trackList[0].num != id) {
          const newItems = [currentItem, ...trackList];
          console.log('newItems', newItems);
          setTrackList(newItems);
        }

        setIsPlaying(true);
      } else {
        console.log('currentItem', currentItem);
        const newItems = [...trackList, currentItem];
        setTrackList(newItems);
        console.log('trackList', trackList);
        setIsPlaying(true);
        setFirstTimeReady(true);
      }
    }

  };

  let disabledFlg = false;
  if (isPlaying) {
    console.log('trackList[0].num', trackList[0].num)
    if (trackList[0].num == id) {
      disabledFlg = true;
    } else {
      disabledFlg = false;
    }
  }
  return (
    <section className='page'>
      <div class='mvContainer__box clearfix is_black'>
        <div class='mvContainer__box__img'>
          <a href='#'>
            <img
              src='https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_540x540.jpg'
              width='170'
              height='170'
              alt='ラジレキ 〜ラジオ歴史小話〜 '
            />
          </a>
        </div>
        <div class='mvContainerSmall__box__desc'>
          <h1 class='mvContainer__box__desc__title'>Episode{id}</h1>
          <p class='mvContainer__box__desc__detail'>{currentItem.title}</p>
          <div className="mvContainer_btn">
            {disabledFlg ? (
              <>
                <button onClick={onClickAdd} className='mvAddBtn' disabled>
                  追加
                </button>
                <button onClick={onClickPlay} className='mvPlayBtn' disabled>再生中</button>
              </>
            ) : (
              <>
                <button onClick={onClickAdd} className='mvAddBtn'>
                  追加
                </button>
                <button onClick={onClickPlay} className='mvPlayBtn'>再生</button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='mvContainer__box2'>
        {/* <div>エピソード<span>{id}</span><button onClick={onClickAdd} className="mvAddBtn">追加</button></div> */}
        <Link to='/radiohistory' className='arrow_article_btn'>
          全てのエピソード
        </Link>
      </div>
    </section>
  );
});
