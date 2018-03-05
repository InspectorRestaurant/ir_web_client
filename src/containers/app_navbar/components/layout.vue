<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">

    <b-navbar-brand href="#/">
      <strong>Inspector</strong>Restaurant
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="mr-auto">
        <b-nav-item href="#/cities">Cities</b-nav-item>
        <b-nav-item href="#/restaurants">Restaurants</b-nav-item>
        <b-nav-item href="#/about">About</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#/terms">Terms</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>
