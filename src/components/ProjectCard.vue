<script setup>
import { ref } from 'vue'

defineProps({ project: { type: Object, required: true } })
const expanded = ref(false)
</script>

<template>
  <article class="project-card" :class="{ expanded }">
    <div class="project-number">Project</div>
    <h2>{{ project.title }}</h2>
    <p class="project-period">{{ project.period }}</p>
    <p>{{ project.summary }}</p>
    <div v-if="expanded" class="project-detail">
      <p>{{ project.detail }}</p>
      <div class="tag-list"><span v-for="technology in project.technologies" :key="technology">{{ technology }}</span></div>
    </div>
    <div class="project-actions">
      <button type="button" @click="expanded = !expanded">{{ expanded ? 'Show less' : 'Read more' }} <span>{{ expanded ? '↑' : '↓' }}</span></button>
      <a :href="project.link" target="_blank" rel="noreferrer">GitHub ↗</a>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  border-top: 3px solid var(--ink);
  padding: 22px 22px 25px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  background: #e8e5dc;
}

/* .project-card:nth-child(1n) {
  background: var(--acid);
} */

.project-number {
  color: var(--muted);
  font: .7rem 'DM Mono', monospace;
}

.project-card h2 {
  font-size: 2rem;
  letter-spacing: -.06em;
  margin: 45px 0 8px;
}

.project-period {
  font: .7rem 'DM Mono', monospace;
  color: var(--muted);
}

.project-card>p:not(.project-period),
.project-detail {
  color: #536059;
  line-height: 1.5;
  max-width: 480px;
}

.project-detail {
  margin-top: 10px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.tag-list span {
  border: 1px solid var(--line);
  border-radius: 99px;
  padding: 10px 15px;
  font-size: .85rem;
}

.project-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 25px;
  font: .75rem 'DM Mono', monospace;
}

.project-actions button {
  border: 0;
  background: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
}

.project-actions span {
  margin-left: 12px;
}

.project-actions a {
  text-decoration: none;
}

@media (max-width: 700px) {
  .project-card h2 {
    margin-top: 35px;
  }
}
</style>
