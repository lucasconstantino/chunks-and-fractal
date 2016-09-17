import React, { PropTypes } from 'react'

import Navigation from './Navigation'

const App = ({ children }) => (
  <div>
    <Navigation />
    <div>{ children }</div>
  </div>
)

App.propTypes = {
  children: PropTypes.node
}

export default App
