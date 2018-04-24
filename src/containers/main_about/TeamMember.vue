<template>
  <div v-bind:id="3" class="row mb-5">
    <div class="col-lg-8">
        <h1 class="display-3">{{ name }}</h1>
        <h1 class="lead mb-4">Backend Developer</h1>
        <p>{{ name }} is a ITWS'18 student. She had plenty of experiences in full stack development. She has a life beside programing and web development.</p>
    </div>

    <div class="col-lg-4">
      <img class='logo' src="@/assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: ['name']
}
</script>
