<template>
  <div class="row">

    <div class="col-lg-12" v-if="model && model.address">
      <p class="lead font-weight-bold mb-0">
        <!-- {{ model.facility }} -->
        {{ model.operation_name }}
      </p>

      <a :href="mapUrl" target='_blank' v-b-tooltip.hover.bottom title="Open in Google Maps">
        {{ address }}
      </a>
      <!-- <pre>{{ model }}</pre> -->
    </div>

    <div class="col-lg-12">
      <hr>
    </div>

    <div class="col-lg-12">
      <ul class="list-group">
        <InspectionChild :inspection="inspection" v-for="inspection in inspections" :key="inspection.date" />
      </ul>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import _ from 'lodash'
import moment from 'moment'
import InspectionChild from './InspectionChild'
import { mapGetters } from 'vuex'

export default {
  name: 'restaurant_detail',
  components: {
    InspectionChild
  },
  computed: {
    ...mapGetters({
      model: 'restaurant/model'
    }),
    address () {
      let address = this.model.address
      return `${address.street}, ${address.city}, ${address.state} ${address.zipcode}`
    },
    mapUrl () {
      const searchUrl = 'https://maps.google.com/'
      return [searchUrl, '?q=', encodeURIComponent(this.address)].join('')
    },
    inspections () {
      return _.chain(this.model.inspections)
      .map((i) => {
        i.unix = moment(i.date).unix()
        return i
      })
      .orderBy(['unix'], ['desc'])
      .value()
    }
  }
}
</script>
