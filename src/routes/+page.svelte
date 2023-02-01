<script>
	import { lazyLoad } from '$lib/utils/lazyLoad.js';
	import img1 from '$lib/images/0ABAE99A.jpg';
	import img2 from '$lib/images/5119AAC1.jpg';
	import img3 from '$lib/images/64425FB0.jpg';
	import img4 from '$lib/images/673268FE.jpg';
	import img5 from '$lib/images/003215340002.jpg';
	import img6 from '$lib/images/003215340017.jpg';
	export let images = [
		{ src: img1, alt: 'Image 1' },
		{ src: img2, alt: 'Image 2' },
		{ src: img3, alt: 'Image 3' },
		{ src: img4, alt: 'Image 4' },
		{ src: img5, alt: 'Image 5' },
		{ src: img6, alt: 'Image 6' },
	];

</script>

<svelte:head>
	<title>Cinematographer - Robins Svarcs</title>
	<meta name='description'
				content='Amateur cinematographer and video editor' />
</svelte:head>

<div class='wrap'>
	<header>
		<h2>Robins Svarcs</h2>
		<h1>Cinematographer</h1>
		<p>Amateur cinematographer and video editor studying at Baltic Film & Media School in Tallinn, Estonia. Throughout
			the years, has worked on several music videos, advertisements, movie sets and events.</p>
		<p>
			<a href='https://www.instagram.com/cetracis' target='_blank' rel='noopener noreferrer'>Instagram</a> | <a
				href='https://www.linkedin.com/in/cetracis/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
		</p>

	</header>

	<section>
		<h2>Work</h2>
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
		<p>© 2021 Robins Svarcs</p>
	</footer>
</div>

<style lang='scss'>
 header {
	 max-width: 800px;
	 text-align: center;
	 margin: 5em auto 0;
 }
 h1 {
	 margin: 2rem 0 4rem;
   font-family: 'Lobster', cursive;
	 font-size: 6em;
   color: #f25e22;
 }
 h2 {
	 font-size: 1.7em;
 }
 p {
	 font-size: 1.5em;
	 line-height: 1.5;
 }

 /** content */
 section {
   margin: 6rem 0 0;
   padding: 4rem;

   h2 {
     text-align: center;
     margin: 2rem 0 4rem;
		 color: #f25e22;
   }
 }
 .section-grey {
   background: #f3f3f2;
 }

 .grid-images {
	 display: grid;
	 grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	 grid-gap: 1rem;
   max-width: 1200px;
	 margin: 0 auto;

   img {
     opacity: 0;
     transition: all 3s ease;
   }
 }

 footer {
	 padding: 2rem 0;
	 border-top: 1px solid #ccc;
	 text-align: center;
 }
</style>
