<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <p class="lead">RESTAURANT SHOW</p>
        <pre>{{ model }}</pre>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'restaurant_show',
  props: ['id'],
  metaInfo: {
    title: 'Restaurants'
  },
  created () {
    this.fetch(this.id)
  },
  methods: mapActions({
    fetch: 'restaurant/fetchModel'
  }),
  computed: mapGetters({
    model: 'restaurant/model'
  })
}
</script>
