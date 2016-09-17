import React, { PropTypes } from 'react'

import Navigation from './Navigation'

const App = ({ children }) => (
  <div style={ styles }>
    <Navigation />
    <div>{ children }</div>
  </div>
)

App.propTypes = {
  children: PropTypes.node
}

export default App

// Don't look any further, inline styling sucks :)
// -----------------------------------------------

const styles = {
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'text-align': 'center',
}
