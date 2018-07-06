import { createRouteBundle } from 'redux-bundler'
import StatusPage from '../status/StatusPage'
import FilesPage from '../files/FilesPage'
import ExplorePage from '../explore/ExplorePage'
import PeersPage from '../peers/PeersPage'
import LoadableSettingsPage from '../settings/LoadableSettingsPage'
import WelcomePage from '../welcome/WelcomePage'

export default createRouteBundle({
  '/files': FilesPage,
  '/explore*': ExplorePage,
  '/files*': FilesPage,
  '/peers': PeersPage,
  '/settings': LoadableSettingsPage,
  '/welcome': WelcomePage,
  '/': StatusPage,
  '': StatusPage
}, { routeInfoSelector: 'selectHash' })
