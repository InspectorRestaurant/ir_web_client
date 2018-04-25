<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-lg-12">

        <div class="row mb-2 pb-2 mt-4">
          <div class="col-lg-12 text-center text-light">
            <!-- <img class='logo' src="@/assets/logo.png"> -->

            <h1>
              <strong>Inspector</strong>Restaurant
            </h1>

            <p class="lead">
              How clean is your favorite restaurant?
            </p>

          </div>
        </div>

        <div class="row py-3">
          <div class="col-sm-12">
            <CitySearch />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
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
  }
}
</script>
