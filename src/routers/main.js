// Main Containers
import MainHome from '@/containers/main_home'
import MainAbout from '@/containers/main_about'
import MainLegal from '@/containers/main_legal'

const MainHomeRoute = {
  path: '/',
  name: 'main_home',
  component: MainHome
}

const MainAboutRoute = {
  path: '/about',
  name: 'main_about',
  component: MainAbout
}

const MainLegalRoute = {
  path: '/terms',
  name: 'main_legal',
  component: MainLegal
}

export default [
  MainHomeRoute,
  MainAboutRoute,
  MainLegalRoute
]
