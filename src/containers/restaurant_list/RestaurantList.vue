<template>
  <div class="row">
    <div class="col-lg-12">
      <ul class="list-group">
        <RestaurantChild :model="model" v-for="model in collection" :key="model._id" />
      </ul>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import RestaurantChild from './RestaurantChild'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'restaurant_list',
  components: {
    RestaurantChild
  },
  methods: mapActions({
    select: 'restaurant/selectModel'
  }),
  computed: mapGetters({
    collection: 'restaurant/filteredCollection'
  })
}
</script>
