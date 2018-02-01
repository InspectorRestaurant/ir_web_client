// Main Containers
import MainHome from '@/containers/main_home'
import MainAbout from '@/containers/main_about'

export const MainHomeRoute = {
  path: '/',
  name: 'main_home',
  component: MainHome
}

export const MainAboutRoute = {
  path: '/about',
  name: 'main_about',
  component: MainAbout
}
