<template>
  <div v-bind:id="3" class="row mb-5">
    <div class="col-lg-8">
        <h1 class="display-3">{{ name }}</h1>
        <p>{{ bio }} </p>

    </div>

    <div class="col-lg-4">
      <img class='logo' src="@/assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: ['name', 'bio']
}
</script>
