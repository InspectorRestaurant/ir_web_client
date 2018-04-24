<template>
  <div class="card card-body">
    <div class="row">

      <div class="col-lg-12">
        <p class="lead font-weight-bold mb-0">
          {{ model.facility }}
          <!-- {{ model.operation_name }} -->
        </p>
        <!-- <small> -->
        {{model.address.street}}, {{model.address.city}}, {{model.address.state}} {{model.address.zipcode}}
        <!-- </small> -->
        <!-- <pre>{{ model.inspections }}</pre> -->
      </div>

      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-6" v-for="m in meta">
            <small>
              <strong class='font-weight-bold'>{{ m.label }}</strong>: {{ m.val }}
            </small>
          </div>
        </div>
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
  data () {
    let model = this.$store.getters['restaurant/model']
    return {
      meta: [
        { label: 'Corporation', val: model.corp_name },
        { label: 'Operator', val: model.operator.first + ', ' + model.operator.last },
        { label: 'Service', val: model.description },
        { label: 'Type', val: model.type }
      ]
    }
  },
  computed: {
    ...mapGetters({
      model: 'restaurant/model'
    }),
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
