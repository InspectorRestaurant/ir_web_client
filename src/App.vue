
<template>
  <div id="app" :class="className">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },
  metaInfo: {
    title: 'Loading...', // set a title
    titleTemplate: 'Inspector Restaurant - %s', // title is now "Inspector Restaurant - Loading..."
    htmlAttrs: {
      lang: 'en'
    }
  },
  computed: {
    ...mapGetters({
      showBgImage: 'main/splash'
    }),
    className () {
      if (this.showBgImage) return 'splash'
      return ''
    }
  }
}
</script>

<style lang="sass">
  @import "./sass/vendor.sass"

  html
    height: 100%

  body
    height: 100%

  #app
    height: 100%
    width: 100%

    &.splash
      // background-image: url('/static/bg.jpg');
      background-image: url('https://farm6.staticflickr.com/5276/14350484785_cc8a156d57_o_d.jpg');
      background-repeat: no-repeat;
      background-size: cover;

    .container, .contianer-fluid
      padding-top: 4.5rem

</style>
