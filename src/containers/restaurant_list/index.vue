<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <CitySearch :dispatch="true" />
      </div>
      <div class="col-lg-8 pl-lg-0 col-md-6 col-sm-12">
        <Search :module='"restaurant"' placeholder="Filter Restaurants" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <RestaurantList v-if="!fetching" />
      </div>
      <div class="col-lg-8 pl-lg-0 col-md-6 col-sm-12">
        <RestaurantDetail v-if="!fetching" />
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Search from '@/components/Search'
import CitySearch from '@/components/CitySearch'
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
    RestaurantList,
    RestaurantDetail
  },
  created () {
    this.fetchViolations()
    if (this.$route.query.city) {
      this.$store.dispatch('restaurant/setCity', this.$route.query.city)
    } else {
      this.fetch()
    }
  },
  destroyed () {
    console.log('DESTROYED')
    this.$store.commit('restaurant/city', '')
  },
  methods: mapActions({
    fetch: 'restaurant/fetchCollection',
    fetchViolations: 'violation/fetchCollection'
  }),
  computed: mapGetters({
    fetching: 'restaurant/fetching'
  })
}
</script>
