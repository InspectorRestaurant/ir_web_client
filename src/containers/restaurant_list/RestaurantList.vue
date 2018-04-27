<template>
  <div class="row">
    <div class="col-lg-12">
      <ul class="list-group">
        <RestaurantChild :model="model" v-for="model in collection" :key="model._id" v-if="collection[0]" />
        <li class="list-group-item list-group-item-warning text-center py-4" v-if="!collection[0]">
          <i class="fa fa-frown-o fa-lg"></i>
          <br>
          No restaurants found
          <br>
          <a href="#" @click.stop.prevent="clearQuery">Reset search</a>
        </li>
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
    select: 'restaurant/selectModel',
    clearQuery: 'restaurant/clearQuery'
  }),
  computed: mapGetters({
    collection: 'restaurant/collection'
  })
}
</script>
