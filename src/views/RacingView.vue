<script setup>
import { RacingCards } from '../data'
</script>

<template>
  <div class="page racing-page">
    <section class="racing-hero section-wrap">
      <p class="eyebrow">Beyond the keyboard</p>
      <h1>Racing is where<br /><em>the details matter.</em></h1>
      <p>Alongside software, I spend time sim racing, building gaming PCs, and following motorsport. This page will become a living record of the results, setups, and stories worth keeping.</p>
    </section>
    <section class="racing-feature section-wrap">
      <!-- <img src="/images/The88Collection.jpg" alt="A collection of racing photographs" style="display: block; width: 100%; max-height: 480px; object-fit: cover;" /> -->
      <div>
        <!-- <p class="eyebrow">The 88 collection</p> -->
        <h1>More than a hobby.</h1>
        <p>Racing is a practice in patience, precision, and constant iteration. Those are the same qualities I bring to building software.</p>
      </div>
    </section>
    <section class="achievement-grid section-wrap">
      <!-- <h2>Results, photos, and race-day notes.</h2> -->
      <article v-for="(RacingCard, index) in RacingCards" :key="RacingCard.Title" class="achievement-card">
        <p class="eyebrow">00{{ index + 1 }}</p>
        <p class="date">{{ RacingCard.Date }}</p>
        <h4>{{ RacingCard.Category }} - Round {{ RacingCard.Round }}</h4>
        <h2>{{ RacingCard.Title }}</h2>
        <h5>Qualifying: {{ RacingCard.Qualifying }} → Result: {{ RacingCard.Result }}</h5>
        <p>{{ RacingCard.Text }}</p>
        <div v-if="RacingCard.VideoLink">
          <a :href="RacingCard.VideoLink" target="_blank" rel="noreferrer">Watch the race recap</a>
        </div>
      </article>
    </section>
    <!-- <section class="racing-note section-wrap">
      <p class="eyebrow">Coming next</p>
      
      <p>The original project already has racing imagery and video assets. The next pass can turn them into proper galleries and achievement entries instead of leaving them disconnected from the site.</p>
    </section> -->
  </div>
</template>

<style scoped>
.racing-hero {
  padding: 35px 0 35px;
}

.racing-hero h1 {
  font-size: clamp(3.2rem, 8vw, 7.8rem);
  line-height: .94;
  letter-spacing: -.085em;
  margin: 24px 0;
  max-width: 1000px;
}

.racing-hero h1 em {
  color: red;
  font-style: normal;
}

.racing-hero>p:last-child {
  max-width: 570px;
  line-height: 1.6;
  color: #536059;
  font-size: 1.15rem;
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  padding-bottom: 120px;
}

.achievement-grid article {
  border-top: 1px solid var(--ink);
  padding-top: 18px;
}

.achievement-grid h2 {
  font-size: 2.1rem;
  letter-spacing: -.06em;
}

.achievement-grid p:last-child {
  color: #536059;
  line-height: 1.6;
}

.date {
  font-size: 12px;
}

.racing-note {
  padding: 80px 0 140px;
  border-top: 1px solid var(--line);
}

.racing-note h2 {
  font-size: clamp(2rem, 4vw, 4rem);
  letter-spacing: -.07em;
  margin: 10px 0;
}

.racing-note p {
  line-height: 1.65;
  color: #536059;
}

.racing-note p:last-child {
  max-width: 600px;
}

@media (max-width: 700px) {
  .racing-hero {
    padding: 70px 0 100px;
  }

  .racing-hero h1 {
    font-size: clamp(3rem, 15vw, 5rem);
  }

  .achievement-grid {
    grid-template-columns: 1fr;
  }
}
</style>
