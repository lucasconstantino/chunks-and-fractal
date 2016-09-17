import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import App from './App'

// ========================================================
// Render setup
// ========================================================

const container = document.createElement('div')
document.body.appendChild(container)

ReactDOM.render(<Router history={ browserHistory } routes={ App } />, container)
