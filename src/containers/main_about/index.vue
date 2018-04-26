
<template>
  <div class="container h-80">

    <div class="row align-items-center">

      <div class="col-lg-4">
        <p class='lead'>We are a student group creating this web application to call forth attention to food safety, and offering consumers an easy to use online information source to learn about food inspection history.</p>
      </div>

      <div class="col-lg-8 text-center">
        <h2 class="display-2 lead">WHO WE ARE</h2>
      </div>

    </div>

    <hr>

    <div class="row mb-4 pb-4">

      <TeamMember name="Alex" bio="Alex is an Computer Science major graduating in the class of 2018. He has multitudes of experience and a passion for writing clean code. He has been the technical lead for this project and has taught and guided the team throughout. "/>

      <TeamMember  name="Jonathan" bio="Jonathan is a Computer Science and ITWS dual major concentrating in Web Technologies. His CS background and internship experiences make him a effective and efficient addition to the team in all forms of development. "/>

      <TeamMember name="Diana" id="Diana" bio="Diana is a senior ITWS major with a concentration in programming. She likes learning new technologies and fullstack development."/>

      <TeamMember  name="Stephanie" bio="Stephanie is an ITWS student concentrating in Data Science and Communications graduating in the Class of 2019. She is also pursuing minors in Computer Science and Chinese. With internship experience in Information Security, coursework in both Computer Science and ITWS, Stephanie is a strong contributor to the team in fullstack development."/>

    </div>

  </div>
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
