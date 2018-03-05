<template>
  <a :class="className" @click="select(model._id)">
    {{ model.facility }}
  </a>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  name: 'restaurant_child',
  props: ['model'],
  methods: mapActions({
    select: 'restaurant/selectModel'
  }),
  computed: {
    className () {
      let css = ['list-group-item', 'list-group-item-action']
      if (this.$store.getters['restaurant/selected_model_id'] === this.model._id) {
        css.push('active')
      }
      return css.join(' ')
    }
  }
}
</script>
