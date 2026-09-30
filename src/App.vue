<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const menuOpen = ref(false)
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/" @click="menuOpen = false" aria-label="Go to home">
        <img src="/images/signature.png" alt="Imran Aderemi signature" style="height: 100px; width: auto; display: block; border-radius: 5px;" />
      </RouterLink>
      <button class="menu-toggle" type="button" aria-label="Toggle navigation" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <nav class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <RouterLink to="/" @click="menuOpen = false">About</RouterLink>
        <!-- <RouterLink to="/portfolio" @click="menuOpen = false">Portfolio</RouterLink> -->
        <RouterLink to="/88+" @click="menuOpen = false">88+</RouterLink>
        <a class="nav-contact" href="mailto:imran.a.aderemi@gmail.com">Get in touch</a>
      </nav>
    </header>
    <main><RouterView /></main>
    <footer class="site-footer">
      <p>Designed and built by Imran Aderemi</p>
      <div class="footer-links">
        <a href="https://www.instagram.com/imi.co.uk" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://www.tiktok.com/@imi.co.uk" target="_blank" rel="noreferrer">TikTok</a>
        <a href="https://www.youtube.com/@ifb_88" target="_blank" rel="noreferrer">YouTube</a>
        <a href="https://github.com/ImranAderemi" target="_blank" rel="noreferrer">GitHub</a>
        <!-- <a href="https://www.linkedin.com/in/imran-aderemi/" target="_blank" rel="noreferrer">LinkedIn</a> -->
         <a href="mailto:imran.a.aderemi@gmail.com">Email</a>
        </div>
    </footer>
  </div>
</template>