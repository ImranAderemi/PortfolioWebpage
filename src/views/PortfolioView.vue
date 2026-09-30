<script setup>
import { projects } from '../data'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <div class="page section-wrap portfolio-page">
    <section class="page-heading">
      <p class="eyebrow">Smaller projects</p>
      <h1>
        Projects with a 
        <em>purpose.</em></h1>
      <p>Small applications and websites that mark the way I’ve been learning.</p>
    </section>
    <section class="project-grid" aria-label="Projects">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </section>
  </div>
</template>

<style scoped>
.page-heading {
  padding: 35px 0 35px;
}

.page-heading h1 {
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: .94;
  letter-spacing: -.085em;
  margin: 24px 0;
  max-width: 1000px;
}

.page-heading em {
  color: red;
  font-style: normal;
}
.page-heading>p:last-child {
  color: var(--muted);
  font-size: 1.1rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  padding-bottom: 120px;
}

@media (max-width: 700px) {
  .page-heading {
    padding: 70px 0 55px;
  }

  .page-heading h1 {
    font-size: clamp(3rem, 15vw, 5rem);
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>
