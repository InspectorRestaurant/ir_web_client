// Main Containers
import MainHome from '@/containers/main_home'
import MainAbout from '@/containers/main_about'
import MainLegal from '@/containers/main_legal'
import RestaurantList from '@/containers/restaurant_list'
import RestaurantShow from '@/containers/restaurant_show'
import CityList from '@/containers/city_list'

const MainHomeRoute = {
  path: '/',
  name: 'main_home',
  component: MainHome
}

const RestaurantListRoute = {
  path: '/restaurants',
  name: 'restaurant_list',
  component: RestaurantList
}

const RestaurantShowRoute = {
  path: '/restaurants/:id',
  name: 'restaurant_show',
  props: true,
  component: RestaurantShow
}

const CityListRoute = {
  path: '/cities',
  name: 'city_list',
  component: CityList
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
  MainLegalRoute,
  RestaurantListRoute,
  RestaurantShowRoute,
  CityListRoute
]
