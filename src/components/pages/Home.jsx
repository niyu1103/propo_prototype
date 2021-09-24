import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = memo(() => {
  return(
    <>
      <h2>ポッドキャスト（Podcast）</h2>
      <Link to="/radiohistory">ラジレキ 〜ラジオ歴史小話〜</Link>
    </>
  )
}

)