import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return <Link {...this.props} activeClassName="activated"/>
  }
  // NOTE reuse Link with extra activeClassName prop
  // NOTE it has class name activeClassName when it's activated
})
