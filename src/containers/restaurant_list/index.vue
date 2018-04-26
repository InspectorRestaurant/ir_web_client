<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <CitySearch :dispatch="true" />
        <Search :module='"restaurant"' placeholder="Filter Restaurants" />
        <Pagination module="restaurant" />
        <RestaurantList v-if="!fetching" />
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12 d-xs-none d-sm-none d-md-block">
        <RestaurantDetail v-if="!fetching" />
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Search from '@/components/Search'
import CitySearch from '@/components/CitySearch'
import Pagination from '@/components/Pagination'
import RestaurantList from './RestaurantList'
import RestaurantDetail from './RestaurantDetail'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'restaurant_list',
  metaInfo: {
    title: 'Restaurants'
  },
  components: {
    Search,
    CitySearch,
    Pagination,
    RestaurantList,
    RestaurantDetail
  },
  created () {
    this.hideSplash()
    this.fetchViolations()
    if (this.$route.query.city) {
      this.$store.dispatch('restaurant/setCity', this.$route.query.city)
    } else {
      this.fetch()
    }
  },
  destroyed () {
    this.$store.commit('restaurant/city', '')
  },
  methods: mapActions({
    fetch: 'restaurant/fetchCollection',
    fetchViolations: 'violation/fetchCollection',
    hideSplash: 'main/hideSplash'
  }),
  computed: mapGetters({
    fetching: 'restaurant/fetching'
  })
}
</script>
