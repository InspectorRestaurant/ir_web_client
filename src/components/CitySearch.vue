<template>
  <div class="row">
    <div class="col-lg-12">
      <form class="form-inline pb-3">
        <v-select :options="cities" @input="onInput" />

        <!-- <select placeholder="asd" class='form-control form-control-lg w-100' :value="city" @input="onInput($event.target.value)"> -->
          <!-- <option value="" disabled selected>Select a city</option> -->
          <!-- <option v-for='c in cities'> -->
            <!-- {{ c }} -->
          <!-- </option> -->
        <!-- </select> -->

      </form>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import vSelect from 'vue-select'
import router from '@/routers'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'city_search',
  props: ['dispatch'],
  components: {
    vSelect
  },
  created () {
    this.fetchCities()
  },
  methods: {
    ...mapActions({
      fetchCities: 'city/fetchCollection',
      setCity: 'restaurant/setCity'
    }),
    ...mapMutations({
      updateCity: 'restaurant/city'
    }),
    onInput (city) {
      console.log(city)
      if (this.dispatch) {
        this.setCity(city)
      } else {
        this.updateCity(city)
        router.push('/restaurants')
      }
    }
  },
  computed: mapGetters({
    city: 'restaurant/city',
    cities: 'city/collection',
    fetching: 'city/fetching'
  })
}
</script>

<style type="text/css">
  .v-select {
    width: 100%;
  }
</style>
