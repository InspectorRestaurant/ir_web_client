<template>
  <div class="row pt-2 pb-3 pb-sm-3 pb-lg-0">
    <div class="col-lg-12">
      <form class="form-inline pb-3">
        <input @input="setFilter($event.target.value)" class="form-control form-control-lg w-100" type="search" :value="filter" placeholder="Search">
      </form>
    </div>
    </div>
  </div>
</template>

<!-- // // // // -->

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'search',
  props: ['module'],
  beforeCreate () {
    // Isolates the 'module' prop
    let module = this.$options.propsData.module

    // Defines Vue.component.computed
    this.$options.computed = mapGetters({
      orderBy: `${module}/orderBy`,
      showingInactive: `${module}/showingInactive`,
      filter: `${module}/filter`
    })

    // Defines Vue.component.methods
    this.$options.methods = mapActions({
      toggleOrder: `${module}/toggleOrderBy`,
      toggleInactive: `${module}/toggleInactive`,
      setFilter: `${module}/setFilter`
    })
  }
}
</script>
