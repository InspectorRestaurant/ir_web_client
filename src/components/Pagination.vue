<template>
  <div class="row mb-3">
    <div class="col-sm-12">

      <div class="btn-group w-100">
        <button :disabled="currentPage === 1" class="btn btn-outline-primary w-33" @click="prevPage()">
          <i class="fa fa-angle-left"></i>
          Prev
        </button>

        <button disabled class="btn btn-outline-primary w-33">
          Page
          {{ currentPage }}
        </button>

        <button class="btn btn-outline-primary w-33" @click="nextPage()">
          Next
          <i class="fa fa-angle-right"></i>
        </button>
      </div>

    </div>
  </div>
</template>

<!-- // // // // -->

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Pagination',
  props: ['module'],
  beforeCreate () {
    // Isolates the 'module' prop
    let module = this.$options.propsData.module

    // Defines Vue.component.computed
    this.$options.computed = mapGetters({
      pages: `${module}/pages`,
      currentPage: `${module}/currentPage`,
      totalPages: `${module}/totalPages`,
      hasPrevPage: `${module}/prevPage`,
      hasNextPage: `${module}/nextPage`
    })

    // Defines Vue.component.methods
    this.$options.methods = mapActions({
      firstPage: `${module}/firstPage`,
      prevPage: `${module}/prevPage`,
      goToPage: `${module}/goToPage`,
      nextPage: `${module}/nextPage`,
      lastPage: `${module}/lastPage`
    })
  }
}
</script>

<style type="text/css">
  .w-20 {
    width: 20% !important;
  }

  .w-33 {
    width: 33% !important;
  }
</style>
