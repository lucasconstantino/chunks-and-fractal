import React from 'react'
import { Link } from 'react-router'

const Navigation = () => (
  <nav>
    <Link to='/' style={ styles.link }>Home</Link>
    <Link to='/about' style={ styles.link }>About</Link>
    <Link to='/blog' style={ styles.link }>Blog</Link>
    <Link to='/events' style={ styles.link }>Events</Link>
  </nav>
)

export default Navigation

// Don't go any further, inline styling sucks :)
// ---------------------------------------------

const styles = {
  link: {
    display: 'inline-block',
    margin: '0.5em'
  }
}
