<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <a class="navbar-brand" href="#/">
      <strong>Inspector</strong>Restaurant
    </a>

	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav ml-auto">

        <li class="nav-item">
          <a class="nav-link" href="#/about">
            <i class="fa fa-fw fa-question-circle-o"></i>
            About
          </a>
        </li>

	    </ul>
	  </div>
	</nav>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>
