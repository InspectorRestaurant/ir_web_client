<template>
  <div class="col-lg-6">
    <h2>{{ name }}</h2>
    <p class='lead'>{{ bio }} </p>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: ['name', 'bio']
}
</script>
