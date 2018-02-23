<template>
  <div class="container h-100">
<!--  for some reason, this height is showing up wierdly on my screen, the footer can now be scrolled up instead of staying at the bottom-->
    <div class="row h-100 align-items-center">
      <div class="col-lg-12">

        <div class="row mb-3 pb-2">
          <div class="col-lg-12 text-center">
<!--             <img class='logo' src="@/assets/logo.png"> -->
            <h1>InspectorRestaurant</h1>
          </div>
        </div>

        <div class='row'>
          <div class='col-lg-12'>
            <ul class='list-group'>
              <li class='list-group-item' v-for="each in results" :key="each._id">
                {{ each.facility }}
<!--                 <pre class='text-light bg-dark'>{{ each.inspections.length }}</pre> -->
              </li>
            </ul>
          </div>
        </div>

        <div class="row py-4">
          <div class="col-lg-12 text-center input-group mb-3">
            <input type='text' class='form-control' placeholder="which restaurant are you checking?" v-on:keyup.enter='restaurant_autofill'>
            <input type='text' class='form-control' placeholder="which city do you want to check?"v-on:keyup.enter='city_autofill'>
            <button type='submit' class='btn btn-primary mx-2 px-1.5' v-on:click="submitsearch">search</button>

            <!--
<button v-if="showButton" @click="onButtonClick" class="btn btn-primary" >
              {{ buttonText }}
            </button>

            <button v-else @click="onButtonClick" class="btn btn-success" >
              {{ buttonText }}
            </button>

            <br/>
            <br/>

            <ButtonComponent buttonText="Hello!" />
            <ButtonComponent v-bind:buttonText='queryString' />
            <ButtonComponent :buttonText='buttonText' />
          -->

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
// import ButtonComponent from './myButton'

// Fetch Restaurants from API
function fetchRestaurants () {
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
    title: 'Main - Home'
  },
  components: {
//     ButtonComponent
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
    onButtonClick () {
      if (this.buttonText === 'Checked') {
        this.buttonText = 'Unchecked'
        this.showButton = true
      } else {
        this.buttonText = 'Checked'
        this.showButton = false
      }
    },

    submitsearch () {
//       search+redirect
      fetchRestaurants()
      .then((results) => {
        this.results = results.items
      })
    },

    restaurant_autofill () {
//      restaurant autofill function
    },

    city_autofill () {
//      city autofill function
    }

  }
}
</script>
