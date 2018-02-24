
<template>
  <div id="app">
    <AppNavbar/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppNavbar from '@/containers/app_navbar'
import AppFooter from '@/containers/app_footer'

export default {
  name: 'app',

  // Top-Level Application Components
  components: {
    AppNavbar,
    AppFooter
  },

  // Top-Level page Meta
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

    .container, .contianer-fluid
      padding-top: 4rem

</style>
