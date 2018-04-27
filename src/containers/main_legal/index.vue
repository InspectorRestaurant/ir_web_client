<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12">

        <h3>
          <strong>Inspector</strong>Restaurant
          <small class="text-muted">
            Terms of Service
          </small>
        </h3>

        <hr>

        <p class="lead">
          The data made available by InspectorRestaurant is offered without any explicit or implied promises or guaranteees of correctness or validity.
        </p>

        <p class="lead">
          We currently only maintain data for restaurants in New York State, but we are working to expand the reach of InspectorRestaurants to other states that publish health inspection data.
        </p>

        <p class="lead">
          Any discrepancies in the data should be forwarded to the dataset owner at
          <a href="https://health.data.ny.gov/Health/Food-Service-Establishment-Inspections-Beginning-2/2hcc-shji" target='_blank'>health.data.ny.gov</a>.
        </p>

        <p class="lead">
          If you have any requests for additional services for InspectorRestaurant to provide please direct that to our Github repository and we will try to work on it as soon as possible.
        </p>

        <p class="lead">
          Data provided by
          <a href="https://health.data.ny.gov/Health/Food-Service-Establishment-Inspections-Beginning-2/2hcc-shji" target='_blank'>health.data.ny.gov</a>
        </p>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'
export default {
  name: 'main_legal',
  metaInfo: {
    title: 'Terms of Use'
  },
  created () {
    this.hideSplash()
  },
  methods: mapActions({
    hideSplash: 'main/hideSplash'
  })
}
</script>
