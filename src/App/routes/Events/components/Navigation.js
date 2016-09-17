import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Navigation = () => (
  <nav>
    <Link to='/events' style={ styles.link }>Events home</Link>
    <Link to='/events/calendar' style={ styles.link }>Calendar</Link>
    <Link to='/events/map' style={ styles.link }>Map of events</Link>
  </nav>
)

Navigation.propTypes = {
  basename: PropTypes.string
}

export default Navigation

// Don't go any further, inline styling sucks :)
// ---------------------------------------------

const styles = {
  link: {
    display: 'inline-block',
    margin: '0.5em'
  }
}
