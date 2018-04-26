<template>
  <footer class="footer">
    <div class="container-fluid bg-dark text-light">
      <div class="row">

        <div class="col-sm-6">
          Built with
          <i class="fa fa-heart ml-1 text-danger"></i>
          &nbsp;by&nbsp;
          <a href="https://github.com/InspectorRestaurant" class='text-light' target='_blank'>InspectorRestaurant</a>
          &nbsp;at&nbsp;
          <a href="https://rpi.edu" target='_blank' class='text-light'>RPI</a>
        </div>

        <div class="col-sm-6 text-right">
          Data provided by
          <a href="https://health.data.ny.gov/Health/Food-Service-Establishment-Inspections-Beginning-2/2hcc-shji" class='text-light' target='_blank'>health.data.ny.gov</a>
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
