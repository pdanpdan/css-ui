<template>
  <div class="flex min-h-screen theme-neutral variant-style-soft size-md" @touchstart="">
    <label
      for="drawer-toggle"
      class="fixed start-1 top-1 btn z-10 variant-density-dense variant-aspect-square variant-shape-pill lg:hidden"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="size-6 stroke-current">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
    <input type="checkbox" class="peer appearance-none" id="drawer-toggle" />

    <aside class="group sticky inset-s-0 top-0 z-5 h-screen w-0 shrink-0 overflow-visible lg:w-80" v-once>
      <label for="drawer-toggle" class="fixed inset-0 hidden bg-black/60 max-lg:group-peer-checked:block" />
      <div
        class="absolute inset-0 w-80 overflow-auto surface-lv-1 p-6 theme-primary max-lg:-translate-x-full max-lg:transition-transform max-lg:group-peer-checked:translate-x-0"
      >
        <h1 class="my-4 ms-4 flex items-center justify-between">
          CSS-UI
          <a
            href="https://github.com/pdanpdan/css-ui"
            class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-xs variant-shape-pill"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <svg class="size-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
          </a>
        </h1>

        <nav class="list">
          <button type="button" class="list-row list-row-interactive theme-accent" @click="toggleMode">
            Toggle Mode
          </button>
          <AppLink href="/" v-slot="{ active, href }">
            <a :href="href" class="list-row list-row-interactive" :class="{ 'state-active': active }">Home</a>
          </AppLink>
          <AppLink href="/components/btn" v-slot="{ active, href }">
            <a :href="href" class="list-row list-row-interactive" :class="{ 'state-active': active }">Buttons</a>
          </AppLink>
          <AppLink href="/components/card" v-slot="{ active, href }">
            <a :href="href" class="list-row list-row-interactive" :class="{ 'state-active': active }">Cards</a>
          </AppLink>
          <AppLink href="/components/list" v-slot="{ active, href }">
            <a :href="href" class="list-row list-row-interactive" :class="{ 'state-active': active }">List</a>
          </AppLink>
        </nav>
      </div>
    </aside>

    <main class="mx-auto max-w-[1920px] grow-1 p-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import '/assets/main.css';
import AppLink from '/components/AppLink.vue';

function toggleMode(): void {
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
