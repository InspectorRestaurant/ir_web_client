
<template>
  <div class="container h-80">


<!--         why does the row height not change-->
        <div v-bind:id='0' class="row align-items-center">

<!-- seems like my-5 is the threshold -->
          <div class="col-lg-4 my-5">
            <p>We are a student group creating this web application to call forth attention to food safety, and offering consumers a online information source easy to use to learn about food inspection histories.</p>
          </div>

          <div class="col-lg-8 text-center">
            <h1 class="display-2 lead">WHO WE ARE</h1>
          </div>

        </div>

        <div class="row align-items-center mb-4">
          <div class='col-lg-12'>
            <button class="btn btn-primary bg-light"><a href="#1">next</a></button>
          </div>
        </div>

        <div class="row align-items-center mb-4">
          <div class='col-lg-12'>
            <b-carousel :interval="3000" img-width='1024' img-height='480'>
              <b-carousel-slide :img-blank="true">
                <div class='card bg-dark card-body'>
                  <p class='lead'>Card 1</p>
                </div>
              </b-carousel-slide>
              <b-carousel-slide :img-blank="true">
                <div class='card bg-dark card-body'>
                  <p class='lead'>Card 2</p>
                </div>
              </b-carousel-slide>
              <b-carousel-slide :img-blank="true">
                <div class='card bg-dark card-body'>
                  <p class='lead'>Card 3</p>
                </div>
              </b-carousel-slide>

            </b-carousel>
          </div>
        </div>


        <div class="row align-items-cener">
          <div class="col-lg-12 bg-dark text-light pt-3 mb-5">
            <p>Meet the team</p>
          </div>
        </div>

        <TeamMember name="Alex"/>

        <div class="row col-lg-12 align-items-center mb-4">
          <button class="btn btn-primary bg-light"><a href="#2">next</a></button>
        </div>

        <TeamMember  name="Jonathon"/>

        <div class="row col-lg-12 align-items-center mb-4">
          <button class="btn btn-primary bg-light"><a href="#3">next</a></button>
        </div>

        <TeamMember name="Diana" />

        <div class="row col-lg-12 align-items-center mb-4">
          <button class="btn btn-primary bg-light"><a href="#4">next</a></button>
        </div>

        <TeamMember  name="Kay" />

        <div class="row col-lg-12 align-items-center mb-4">
          <button class="btn btn-primary bg-light"><a href="#5">next</a></button>
        </div>

        <TeamMember  name="Stephanie" />

  </div>

        <!--     figure out how to scroll to an id thingy in vue     -->
        <!--
<div class="display-1">What we do</div>
          <div class="text-center"><a href="#section1">nx_icon</a><div>
        </div>
 -->

</template>

<!-- // // // //  -->

<script>
import TeamMember from './TeamMember'

export default {
  name: 'main_about',
  components: {
    TeamMember
  },
  metaInfo: {
    title: 'About'
  }
}
</script>

<style lang="sass">

/*   div.row */
/*     width: 90% */
/*     height: 80% */

</style>
