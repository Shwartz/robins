<svelte:head>
	<title>Robins Svarcs - cinematographer</title>
	<meta name='description'
				content='Amateur cinematographer and video editor' />
</svelte:head>

<div class='wrap'>
	<section class='grid grid-title'>
		<div class='logo'>
			<h1>Robins Svarcs</h1>
		</div>
		<div>
			<h2>cinematographer &amp; video editor</h2>
		</div>
	</section>

	<section class='grid grid-content'>
		<div class='nav'>
			<p>about</p>
			<p>experience</p>
			<p>works</p>
			<br>
			<p>LinkedIn</p>
			<p>LinkedIn</p>
			<p>LinkedIn</p>
			<p>LinkedIn</p>
		</div>
		<div class='center'>
			<h3>Portfolio video</h3>
			<div>
				<iframe width='100%' height='315' src='https://www.youtube.com/embed/p6zWyxNrHO0' title='YouTube video player'
								frameborder='0'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
								allowfullscreen></iframe>
			</div>
		</div>
	</section>
</div>

<style lang='scss'>
  .wrap {
    padding: 0 8px;
  }

  .grid {
    display: grid;
    grid-template-columns: 124px 1fr;
    margin: 0 auto;
    gap: 8px;
    max-width: 800px;
  }

  .grid-title {
    min-height: 96px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    /*background-color: rgba(234, 152, 152, 0.25);*/

    h1 {
      height: 64px;
      align-self: center;
    }
  }

  .grid-content {
    min-height: calc(100vh - 104px);

    .nav {
      border-right: 1px solid rgba(0, 0, 0, 0.25);
      padding-right: 8px;
    }
  }

  .grid > div {
    /*outline: 1px solid rgba(234, 152, 152, 0.25);*/
  }

  .logo {
    display: flex;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.25);
  }

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    text-align: center;
  }

  /*@media (min-width: 900px) {
    section {
      padding: 0 2rem;
    }
  }*/
</style>
