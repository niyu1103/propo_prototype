import React, {memo} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import {EpisodeRouter} from './EpisodeRouter'

export const Router = memo(() => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route
        path='/radiohistory'
        render={({ match: { url } }) => (
          <Switch>
            {EpisodeRouter.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
}

)