<template>
  <b-navbar toggleable="md" type="dark" variant="danger" fixed="top">

    <b-navbar-brand to="/">
      <strong>Inspector.</strong>Restaurant
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <!-- Left Nav -->
      <b-navbar-nav class="mr-auto">
        <b-nav-item to="/restaurants">
          <i class="fa fa-fw fa-cutlery"></i>
          Restaurants
        </b-nav-item>

        <b-nav-item disabled>|</b-nav-item>

        <b-nav-item to="/terms">
          <i class="fa fa-fw fa-question-circle"></i>
          About
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right Nav -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-item to="/terms"> -->
          <!-- <i class="fa fa-fw fa-info-circle"></i> -->
          <!-- Terms of Use -->
        <!-- </b-nav-item> -->

        <b-nav-item disabled>|</b-nav-item>

        <b-nav-item target="_blank" href="http://inspector.restaurant/docs/">
          <i class="fa fa-fw fa-book"></i>
          Docs
        </b-nav-item>

        <b-nav-item disabled>|</b-nav-item>

        <b-nav-item target="_blank" href="https://github.com/InspectorRestaurant">
          <i class="fa fa-fw fa-lg fa-github"></i>
          GitHub
        </b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<!-- // // // //  -->

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">
  a.navbar-brand
    letter-spacing: 0.15rem
    strong
      font-weight: 600
</style>
