import React from 'react'
import { Link, IndexLink } from 'react-router'

import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>

          <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
          {/* NOTE become active only when path matches / */}

          <li><IndexLink to="/" activeClassName="active">Home 2nd</IndexLink></li>
          {/* NOTE built-in short-hand with onlyActiveOnIndex wrapped */}

          <li><NavLink to="/" onlyActiveOnIndex={true}>Home 3rd</NavLink></li>
          {/* NOTE inject prop into inner Link as 1st example */}

        </ul>
        {this.props.children}
      </div>
    )
  }
})
