<template>
  <transition name="fade">
    <div class="row h-100 align-items-center" v-if="loading">
      <div class="col-lg-12 text-center">
        <i class="fa fa-2x text-muted fa-spin fa-circle-o-notch"></i>
      </div>
    </div>
    <slot v-else></slot>
  </transition>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'loading',
  props: ['loading']
}
</script>

<style type="text/css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
