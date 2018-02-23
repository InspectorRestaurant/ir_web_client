<template>
  <button class="btn btn-outline-success" >
    <i class='fa fa-fw fa-check mr-2'></i>
    {{ buttonText }}
  </button>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['buttonText']
}
</script>
