<svelte:head>
	<title>Robins Svarcs - cinematographer</title>
	<meta name='description'
				content='Amateur cinematographer and video editor' />
</svelte:head>

<div class="wrap">
	<section class="grid grid-title">
		<div>
			<h1>Robins Svarcs</h1>
		</div>
		<div>
			<h2>cinematographer &amp; video editor</h2>
		</div>
	</section>

	<section class="grid">
		<div>
			<p>about</p>
			<p>experience</p>
			<p>works</p>
			<br>
			<p>LinkedIn</p>
			<p>LinkedIn</p>
			<p>LinkedIn</p>
			<p>LinkedIn</p>
		</div>
		<div>
			<p>Portfolio video</p>
			<div>VIDEO HERE</div>
		</div>
	</section>
</div>

<style>
		.wrap {
				padding: 0 8px;
		}

    .grid {
        display: grid;
        grid-template-columns: 124px 1fr;
        margin: 0 auto;
				gap: 8px;
				max-width: 800px;

        background-color: yellow;
    }

		.grid-title {
				min-height: 64px;
				align-items: center;
    }

    .grid > div {
        outline: 1px solid red;
    }

    h1 {
        font-size: 2rem;
        margin: 0;
    }

		h2 {
				font-size: 1.2rem;
        text-align: center;
    }

    /*@media (min-width: 800px) {
        .grid {
            grid-template-columns: 260px 1fr;
            max-width: 1200px;
        }
    }*/

    @media (min-width: 900px) {
        section {
            padding: 0 2rem;
        }
    }
</style>
