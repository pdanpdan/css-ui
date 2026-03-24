<template>
  <div class="flex min-h-screen size-md theme-neutral variant-soft">
    <aside class="sticky top-0 h-screen w-80 shrink-0 surface-lv-1 p-6 theme-primary" v-once>
      <h1 class="m-4">CSS-UI</h1>

      <nav class="flex flex-col gap-2">
        <button type="button" class="btn justify-start theme-accent" @click="toggleMode">Toggle Mode</button>
        <a href="/" class="btn justify-start">Home</a>
        <a href="/btn" class="btn justify-start">Buttons</a>
        <a href="/card" class="btn justify-start">Cards</a>
      </nav>
    </aside>

    <main class="mx-auto max-w-[1920px] grow-1 p-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import '../assets/main.css';

function toggleMode() {
  const { body } = document;
  const { classList } = body;


  if (classList.contains('mode-light')) {
    classList.remove('mode-light');
    classList.remove('mode-dark');
    classList.remove('mode-auto');
    classList.add('mode-dark');
  } else if (classList.contains('mode-dark')) {
    classList.remove('mode-light');
    classList.remove('mode-dark');
    classList.remove('mode-auto');
    classList.add('mode-light');
  } else {
    classList.remove('mode-light');
    classList.remove('mode-dark');
    classList.remove('mode-auto');
    classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'mode-light' : 'mode-dark');
  }
}
</script>
