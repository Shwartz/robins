<script>
	import { lazyLoad } from '$lib/utils/lazyLoad.js';
	import img1 from '$lib/images/art-01.jpg';
	import img2 from '$lib/images/art-02.jpg';
	import img3 from '$lib/images/art-03.jpg';
	import img4 from '$lib/images/art-04.jpg';
	import img5 from '$lib/images/art-05.jpg';
	import img6 from '$lib/images/art-06.jpg';
	import img7 from '$lib/images/art-07.jpg';
	import img8 from '$lib/images/art-08.jpg';
	import img9 from '$lib/images/art-09.jpg';
	import img10 from '$lib/images/art-10.jpg';
	import img11 from '$lib/images/art-11.jpg';
	import img12 from '$lib/images/art-12.jpg';
	import img13 from '$lib/images/art-13.jpg';
	import img14 from '$lib/images/art-14.jpg';
	import img15 from '$lib/images/art-15.jpg';
	import img16 from '$lib/images/art-16.jpg';
	import img17 from '$lib/images/art-17.jpg';
	import img18 from '$lib/images/art-18.jpg';
	import img19 from '$lib/images/art-19.jpg';
	import img20 from '$lib/images/art-20.jpg';
	import img21 from '$lib/images/art-21.jpg';
	import robinsIcon from '$lib/images/robins-icon.jpg';

	export let images = [
		{ src: img1, alt: 'Image 1' },
		{ src: img2, alt: 'Image 2' },
		{ src: img3, alt: 'Image 3' },
		{ src: img4, alt: 'Image 4' },
		{ src: img5, alt: 'Image 5' },
		{ src: img6, alt: 'Image 6' },
		{ src: img7, alt: 'Image 7' },
		{ src: img8, alt: 'Image 8' },
		{ src: img9, alt: 'Image 9' },
		{ src: img10, alt: 'Image 10' },
		{ src: img11, alt: 'Image 11' },
		{ src: img12, alt: 'Image 12' },
		{ src: img13, alt: 'Image 13' },
		{ src: img14, alt: 'Image 14' },
		{ src: img15, alt: 'Image 15' },
		{ src: img16, alt: 'Image 16' },
		{ src: img17, alt: 'Image 17' },
		{ src: img18, alt: 'Image 18' },
		{ src: img19, alt: 'Image 19' },
		{ src: img20, alt: 'Image 20' },
		{ src: img21, alt: 'Image 21' }
	];

	let open = false;
	function handleClick() {
		open = !open;
	}
</script>

<svelte:head>
	<title>Cinematographer - Robins Svarcs</title>
	<meta name='description'
				content='Amateur cinematographer and video editor' />
</svelte:head>

<div class='wrap'>
	<header class='intro'>
		<h2 class='intro-title'>
			<img src={robinsIcon} alt='Robins'/>
			<span>Robins Svarcs</span>
		</h2>
		<h1>Cinematographer</h1>
		<p>Amateur cinematographer and video editor studying at Baltic Film & Media School in Tallinn, Estonia. Throughout
			the years, has worked on several music videos, advertisements, movie sets and events.</p>
		<p>
			<a href='https://www.instagram.com/cetracis' target='_blank' rel='noopener noreferrer'>Instagram</a> | <a
			href='https://www.linkedin.com/in/cetracis/' target='_blank' rel='noopener noreferrer'>LinkedIn</a> <br>
			<button on:click={handleClick} type='button'>{open ? 'Close' : 'Open'} skills</button>
		</p>
	</header>

	<section>
		<h2 class='intro-article'>Work</h2>
		<div class='grid-images'>
			<iframe width='100%' height='315' src='https://www.youtube.com/embed/NlOX1g9rcKc' title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen></iframe>
			<iframe width='100%' height='315' src='https://www.youtube.com/embed/RxN_2YQ_Xp0' title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen></iframe>
		</div>
	</section>

	<section class='section-grey'>
		<div class='grid-images'>
			{#each images as image}
				<figure>
					<img use:lazyLoad={image.src} alt={image.alt} />
				</figure>
			{/each}
		</div>
	</section>

	<footer>
		<p>© 2023 Robins Svarcs</p>
	</footer>

	<figure class="skills {open ? 'open' : ''}">
		<header>
			<button class='close' on:click={handleClick} type='button'>X</button>
		</header>
		<div class='content'>
			<h3>Skills</h3>
			<ul>
				<li>Camera works</li>
				<li>Lightning</li>
				<li>Video editing</li>
				<li>Producing/Planning</li>
				<li>Adobe Suite</li>
				<li>Social Media Managing</li>
				<li>3d Blender</li>
				<li>Motion Graphics</li>
			</ul>
		</div>

	</figure>
</div>

<style lang='scss'>
	.skills {
		position: fixed;
		top: 0;
		left: 0;
		max-width: 500px;
		width: 100%;
		height: 100%;
    background: #fdfbf9;
		visibility: hidden;
		opacity: 0;
		transform: translateX(-100%);
		-webkit-transform: translateX(-100%);
		-webkit-transition: -webkit-transform 0.45s ease, opacity 0.45s ease;
		transition: transform 0.45s ease, opacity 0.45s ease;
		z-index: 100;
		border-right: 1px solid #ccc;
		box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);

		&.open {
			visibility: visible;
			opacity: 1;
			transform: translateY(0);
			-webkit-transform: translateY(0);
		}

		header {
			border-bottom: 1px solid #ccc;
      text-align: right;
		}

		h3 {
			text-align: center;
			margin-top: 1em;
		}

		.content {
			padding: 1em;
      height: 100%;
      overflow: auto;
		}

		ul {
			margin-bottom: 8em;
		}

		.close {
			margin: 1.2em;
		}
	}

  .intro {
    max-width: 800px;
    text-align: center;
    margin: 5em auto 0;
  }

  h1 {
    margin: 2rem 0 4rem;
    font-family: 'Lobster', cursive;
    /*font-size: 6em;*/
		font-size: 12vw;
    line-height: 12vw;
    color: #f25e22;

    visibility: visible;
    opacity: 1;
     transform: translateY(0) scale(1);
		-webkit-transform: translateY(0) scale(1);
    -webkit-transition: -webkit-transform 0.45s ease 0.48s, opacity 0.45s ease 0.48s;
     transition: transform 0.45s ease 0.48s, opacity 0.45s ease 0.48s;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 6rem;
      line-height: 12vw;
    }
  }

	button {
		padding: 0.5em 1em;
		background: #f25e22;
		border: none;
		border-radius: 0.5em;
		color: #fff;
		font-size: 0.8em;
		cursor: pointer;
		transition: all 0.3s ease;
		margin: 0.5em;

		&:hover {
      box-shadow: 0 0 0.8em 1px rgba(242, 94, 34, 0.8);
		}

	}

  .intro-title {
		display: flex;
		justify-content: center;
		align-items: center;
    font-size: 1.7em;

		img {
			width: 1.5em;
			height: 1.5em;
			margin-right: 0.5em;
			border-radius: 50%;
			box-shadow: 0 0 0.8em 1px rgba(242, 94, 34, 0.8);
		}
  }

  p {
    font-size: 1.5em;
    line-height: 1.5;
  }

  /** content */
  section {
    margin: 6rem 0 0;
    padding: 1rem;

		.intro-article {
			font-size: 1.5em;
    }

    h2 {
      text-align: center;
      margin: 2rem 0 3rem;
      color: #f25e22;
    }

    @media (min-width: 768px) {
      padding: 1rem;
		}
  }

  .section-grey {
    background: #f3f3f2;
  }

  .grid-images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    img {
      opacity: 0;
      transition: all 2s ease;
    }
  }

  footer {
    padding: 2rem 0;
    border-top: 1px solid #ccc;
    text-align: center;
  }
</style>
