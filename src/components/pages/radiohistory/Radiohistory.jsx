import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

export const Radiohistory = memo(() => {
  return (

    <section className="page">
      <div className="mvContainer__box clearfix is_black">
        <div className="mvContainer__box__img">
          <a href="#">
            <img src="https://storage.googleapis.com/propo-apollo.appspot.com/users/X4wgS1qpQSSvTW5FSTPgO9HyS8B2/channels/FEPdlmxIDrgN6wYk0EK0/images/radireki_thumbnail_540x540.jpg" width="233" height="233" alt="ラジレキ 〜ラジオ歴史小話〜 " />
          </a>
        </div>
        <div className="mvContainerSmall__box__desc">
          <h1 className="mvContainer__box__desc__title">ラジレキ 〜ラジオ歴史小話〜 </h1>
          <p className="mvContainer__box__desc__detail" >
            『ラジレキ 〜りーとん・そっしーのラジオ歴史小話〜』 〜歴史 × ビジネス × 雑談ネタ × ゆるさ〜 意外な組み合わせを、"歴史フリーク" りーとんと、"頑張るマン" そっしーの二人が織りなす、ゆるく聞きやすく、時に痛快に展開するポッドキャスト（Podcast）番組。 難しい！と感じる歴史のハナシも、身近なものと組み合わせてくれると思わず誰かとシェアしたくなるから不思議です。 ゆる～く、かるく、やわらかく、皆さんの耳に♪
          </p>
        </div>
      </div>
      <div className="mvContainer__box2">
        <h3>Episodes</h3>
        <div className="allEpisodes__content">
          <Link to="/radiohistory/518" className="episode-item">エピソード<span>0518</span></Link>
          <br />
          <Link to="/radiohistory/517" className="episode-item">エピソード<span>0517</span></Link>
          <br />
          <Link to="/radiohistory/365" className="episode-item">エピソード<span>0365</span></Link>
          <br />
          <Link to="/radiohistory/366" className="episode-item">エピソード<span>0366</span></Link>
          <br />
          <Link to="/radiohistory/367" className="episode-item">エピソード<span>0367</span></Link>
        </div>

      </div>

    </section>

  )
}

)