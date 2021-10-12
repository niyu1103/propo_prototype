import React, { memo, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrackContext } from '../../../providers/TrackProvider';
import { ApiFetchChannel } from '../../../components/ApiFetchChannel';

export const Radiohistory = memo(() => {
  const { channelInfo, setChannelInfo } = useContext(TrackContext);

  const { getChannel,channel } = ApiFetchChannel();
  console.log('channel', channel);

  useEffect(() => getChannel(), []);
  setChannelInfo(channel);
  console.log('channelInfo', channelInfo);

  return (
    <section className='page'>
      <div className='mvContainer__box clearfix is_black'>
        <div className='mvContainer__box__img'>
          <a href='#'>
            <img
              src={channelInfo.thumb}
              width='233'
              height='233'
              alt='ラジレキ 〜ラジオ歴史小話〜 '
            />
          </a>
        </div>
        <div className='mvContainerSmall__box__desc'>
          <h1 className='mvContainer__box__desc__title'>
            {channelInfo.aboutus_title}
          </h1>
          <p className='mvContainer__box__desc__detail'>{channelInfo.desc}</p>
        </div>
      </div>
      <div className='mvContainer__box2'>
        <h3>Episodes</h3>
        <div className='allEpisodes__content'>
          <Link to='/radiohistory/518' className='episode-item'>
            エピソード<span>0518</span>
          </Link>
          <br />
          <Link to='/radiohistory/517' className='episode-item'>
            エピソード<span>0517</span>
          </Link>
          <br />
          <Link to='/radiohistory/365' className='episode-item'>
            エピソード<span>0365</span>
          </Link>
          <br />
          <Link to='/radiohistory/366' className='episode-item'>
            エピソード<span>0366</span>
          </Link>
          <br />
          <Link to='/radiohistory/367' className='episode-item'>
            エピソード<span>0367</span>
          </Link>
        </div>
      </div>
    </section>
  );
});
