import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'
import About from './modules/About'
import Repos from './modules/Repos'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/*
      NOTE what's history?
        - what you see: it becomes http://localhost:8080/#/?_k=cdlcqb
        - it's bc we use bashHistory
      */}
    {/* add the routes here */}
    {/*  NOTE load component when path matches */}
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))
