<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-lg-12">

        <div class="row mb-2 pb-2 mt-4">
          <div class="col-lg-12 text-center text-light">

            <h1>
              <strong>Inspector.</strong>Restaurant
            </h1>

            <p class="lead">
              <!-- How clean is your favorite restaurant? -->
              View health inspection history for restaurants in NY State
            </p>

          </div>
        </div>

        <div class="row py-3">
          <div class="col-sm-12 v-select-lg">
            <CitySearch />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'
import CitySearch from '@/components/CitySearch'
export default {
  name: 'main_home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    CitySearch
  },
  data () {
    return {
      queryString: 'Shalimar',
      buttonText: 'Checked',
      showButton: true,
      results: []
    }
  },
  mounted () {
    this.showSplash()
  },
  methods: mapActions({
    showSplash: 'main/showSplash'
  })
}
</script>

<style lang="sass">
  .v-select-lg
    .row
      .col-lg-12
        .form-inline.pb-3
          .v-select
            .dropdown-toggle
              border-color: #f3f3f3
              background: #f3f3f3
              padding: .5rem 0
              align-items: center
              font-size: 120%
</style>
