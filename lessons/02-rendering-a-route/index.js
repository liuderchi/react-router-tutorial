import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'

// render(<App/>, document.getElementById('app'))

render((
  <Router history={hashHistory}>
    {/*
      NOTE what's history?
        - what you see: it becomes http://localhost:8080/#/?_k=cdlcqb
        - it's bc we use bashHistory
      */}
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))
