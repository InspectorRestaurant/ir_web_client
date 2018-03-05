<template>
  <footer class="footer">
    <div class="container-fluid bg-dark text-light border-top">
      <div class="row">

        <div class="col-sm-6">
          Built with
          <i class="fa fa-heart ml-1 text-danger"></i>
          &nbsp;by&nbsp;
          <a href="https://github.com/InspectorRestaurant" target='_blank'>
            InspectorRestaurant
          </a>
          &nbsp;at&nbsp;
          <a href="https://rpi.edu" target='_blank' class='text-danger'>
            RPI
          </a>
        </div>

        <div class="col-sm-6 text-right">
          <small class='text-muted'>
            <a href="#/terms" class='text-muted'>
              <i class="fa fa-fw fa-info-circle"></i>
              Terms of use
            </a>
          </small>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="sass">

  footer.footer
    z-index: 1000
    position: fixed
    width: 100%
    bottom: 0
    line-height: 3rem
</style>
