import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          {/* NOTE activated Link will be red, which is smarter than Link */}
          <li><Link to="/about" activeClassName="activated">About</Link></li>
          <li><Link to="/repos" activeClassName="activated">Repos</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
