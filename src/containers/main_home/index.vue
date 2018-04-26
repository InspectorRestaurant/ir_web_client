<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-lg-12">

        <div class="row mb-2 pb-2 mt-4">
          <div class="col-lg-12 text-center text-light">

            <h1>
              <strong>Inspector</strong>Restaurant
            </h1>

            <p class="lead">
              How clean is your favorite restaurant?
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
    .dropdown-toggle
      border-color: #f3f3f3
      background: #f3f3f3
      padding: .5rem 0
      align-items: center
      font-size: 120%
</style>
