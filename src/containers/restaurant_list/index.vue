<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <CitySearch :dispatch="true" />
        <Search :module='"restaurant"' placeholder="Filter Restaurants" />
        <Pagination module="restaurant" />
        <RestaurantList v-if="!fetching" />
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12">
        <Loading :loading="fetchingModel">
          <RestaurantDetail v-if="!fetchingModel" />
        </Loading>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Search from '@/components/Search'
import Loading from '@/components/Loading'
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
    Loading,
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
    fetching: 'restaurant/fetching',
    fetchingModel: 'restaurant/fetching_model'
  })
}
</script>
