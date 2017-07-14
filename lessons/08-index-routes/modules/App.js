import React from 'react'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>

          <li><a href="/">Back to Home</a></li>
        </ul>

        {this.props.children || <Home/>}
        {/* NOTE when route is / show Home as deault child component*/}
      </div>
    )
  }
})
