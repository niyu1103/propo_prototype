import React, { memo } from 'react';
import { Link } from 'react-router-dom';

export const Page404 = memo(() => {
  return(
    <>
      <h2>404ページです</h2>
      <Link to="/radiohistory">ラジレキ 〜ラジオ歴史小話〜</Link>
    </>
  )
}

)