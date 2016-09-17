import React, { PropTypes } from 'react'

import Navigation from './Navigation'

const Events = ({ children, location: { pathname } }) => (
  <div>
    <p>You are in the events section!</p>
    <Navigation basename={ pathname } />
    <div>{ children }</div>
  </div>
)

Events.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
}

export default Events
