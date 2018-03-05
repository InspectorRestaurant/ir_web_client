<template>
  <div class="container">

    <Search :module='"restaurant"' />

    <div class="row">
      <div class="col-lg-12">
        <ul class="list-group">
          <a :href="'#/restaurants/' + model._id" class="list-group-item" v-for='model in collection'>
            {{ model.facility }}
          </a>
        </ul>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Search from '@/components/Search'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'restaurant_list',
  metaInfo: {
    title: 'Restaurants'
  },
  components: {
    Search
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'restaurant/fetchCollection'
  }),
  computed: mapGetters({
    collection: 'restaurant/filteredCollection'
  })
}
</script>
