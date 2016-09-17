import Events from './components/Events'

import Calendar from './routes/Calendar'
import MapOfEvents from './routes/MapOfEvents'

module.exports = {
  path: 'events',
  component: Events,
  childRoutes: [
    Calendar,
    MapOfEvents,
  ],
}
