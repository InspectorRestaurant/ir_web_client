<template>
  <div class="container">

    <Search :module='"city"' />

    <div class="row">
      <div class="col-lg-12">
        <ul class="list-group">
          <a :href="'#/cities/' + model._id" class="list-group-item" v-for='model in collection'>
            {{ model._id }}
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
  name: 'city_list',
  metaInfo: {
    title: 'Cities'
  },
  components: {
    Search
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: 'city/fetchCollection'
  }),
  computed: mapGetters({
    collection: 'city/filteredCollection'
  })
}
</script>
