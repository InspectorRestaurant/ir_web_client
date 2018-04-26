
<template>
  <div class="container h-80">


<!--         why does the row height not change-->
        <div v-bind:id='0' class="row align-items-center">

<!-- seems like my-5 is the threshold -->
          <div class="col-lg-4 my-5">
            <p>We are a student group creating this web application to call forth attention to food safety, and offering consumers an easy to use online information source to learn about food inspection history.</p>
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

        <TeamMember name="Alex" bio="Alex is an Computer Science major graduating in the class of 2018. He has multitudes of experience from working at Cisco as well as a passion for coding. He has been the technical lead for this project and has taught and guided the team throughout. "/>

        <div class="row col-lg-12 align-items-center mb-4">
          <button class="btn btn-primary bg-light"><a href="#2">next</a></button>
        </div>

        <TeamMember  name="Jonathan" bio="Jonathan is a Computer Science and ITWS dual major concentrating in Web Technologies. His CS background and internship experiences make him a effective and efficient addition to the team in all forms of development. "/>

        <div class="row col-lg-12 align-items-center mb-4">
          <button class="btn btn-primary bg-light"><a href="#3">next</a></button>
        </div>

        <TeamMember name="Diana" id="Diana"/>

        <div class="row col-lg-12 align-items-center mb-4">
          <button class="btn btn-primary bg-light"><a href="#4">next</a></button>
        </div>

        <TeamMember  name="Stephanie" bio="Stephanie is an ITWS student concentrating in Data Science and Communications graduating in the Class of 2019. She is also pursuing minors in Computer Science and Chinese. With internship experience in Information Security, coursework in both Computer Science and ITWS, Stephanie is a strong contributor to the team in fullstack development."/>

        <div class="row col-lg-12 align-items-center mb-4">
          <button class="btn btn-primary bg-light"><a href="#5">next</a></button>
        </div>

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
import { mapActions } from 'vuex'
import TeamMember from './TeamMember'

export default {
  name: 'main_about',
  components: {
    TeamMember
  },
  metaInfo: {
    title: 'About'
  },
  created () {
    this.hideSplash()
  },
  methods: mapActions({
    hideSplash: 'main/hideSplash'
  })
}
</script>

<style lang="sass">

/*   div.row */
/*     width: 90% */
/*     height: 80% */

</style>
