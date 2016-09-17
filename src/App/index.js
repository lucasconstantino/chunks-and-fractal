import App from './components/App'

import Home from './routes/Home'
import About from './routes/About'
import Blog from './routes/Blog'

module.exports = {
  path: '/',
  component: App,
  indexRoute: Home,
  childRoutes: [
    About,
    Blog,
  ],
}
