<template>
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-lg-12">

        <div class="row mb-3 pb-2">
          <div class="col-lg-12 text-center">
            <!-- <img class='logo' src="@/assets/logo.png"> -->
            <h1>InspectorRestaurant</h1>
          </div>
        </div>

        <div class='row'>
          <div class='col-lg-12'>
            <ul class='list-group'>
              <li class='list-group-item' v-for="each in results" :key="each._id">
                {{ each.facility }}
                <!-- <pre class='text-light bg-dark'>{{ each.inspections.length }}</pre> -->
              </li>
            </ul>
          </div>
        </div>

        <div class="row py-4">
          <div class="col-lg-12 text-center input-group mb-3">
            <input type='text' class='form-control' placeholder="which restaurant are you checking?" v-on:input='restaurant_autofill'>
            <input type='text' class='form-control' placeholder="which city do you want to check?" v-on:input='city_autofill'>
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

// TODO - abstract this into the Vuex store
// Fetch Restaurants from API
function fetchRestaurants () {
  // TODO - drop CORS_ANYWHERE
  // Uses CORS Anywhere to handle errors cropping up from cross-origin requests
  const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com'

  // Assembles API_ENPOINT
  const API_ENDPOINT = `${CORS_ANYWHERE}/http://inspector.restaurant/app/api/restaurants`

  // Returns a Promise to manage async behavior
  return new Promise((resolve, reject) => {
    fetch(API_ENDPOINT)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      return resolve(response)
    })
  })
}

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
      fetchRestaurants()
      .then((results) => {
        this.results = results.items
      })
    },
    restaurant_autofill () {
    },
    city_autofill () {
    }
  }
}
</script>
