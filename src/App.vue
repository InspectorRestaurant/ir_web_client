
<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
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
    // background-image: url('/static/bg.jpg');
    background-repeat: no-repeat;

    .container, .contianer-fluid
      padding-top: 4.5rem

</style>
