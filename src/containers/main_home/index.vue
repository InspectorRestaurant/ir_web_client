<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-lg-12">

        <div class="row mb-2 pb-2">
          <div class="col-lg-12 text-center">
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
          <div class="col-lg-12 text-center input-group mb-3">
            <input type='text' class='form-control' placeholder="City in NY state" v-on:input='city_autofill'>
            <input type='text' class='form-control' placeholder="Restaurant" v-on:input='restaurant_autofill'>
            <button type='submit' class='btn btn-primary mx-2 px-1.5' @click="submitSearch()">
              <i class="fa fa-fw fa-search mr-2"></i>
              Search
            </button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'main_home',
  metaInfo: {
    title: 'Home'
  },
  data () {
    return {
      queryString: 'Shalimar',
      buttonText: 'Checked',
      showButton: true,
      results: []
    }
  },
  methods: {
    submitSearch () {
    },
    restaurant_autofill () {
    },
    city_autofill () {
    }
  }
}
</script>
