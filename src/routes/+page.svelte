
<svelte:head>
  <title>Robins Svarcs - cinematographer</title>
  <meta name="description"
        content="Amateur cinematographer and video editor" />
</svelte:head>

<div class="grid">
  <section>
    <h1>Robins Svarcs</h1>
    <h2>cinematographer</h2>
    <p>Amateur cinematographer and video editor</p>
  </section>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
        max-width: 500px;
        padding-bottom: 80px;
    }

    section {
        padding: 0 1rem;
    }

    @media (min-width: 800px) {
        .grid {
            grid-template-columns: 1fr 1fr;
            max-width: 1200px;
        }
    }

    @media (min-width: 900px) {
        section {
            padding: 0 2rem;
        }
    }
</style>
