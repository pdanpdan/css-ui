<template>
  <article class="space-y-6" v-once>
    <h2>List</h2>

    <section class="group space-y-4">
      <h3>Playground</h3>

      <h4>
        Options (page defaults are <code>size-md</code> + <code>theme-neutral</code> + <code>variant-style-soft</code>)
      </h4>
      <DemoSelector />

      <h3>Basic List</h3>
      <div v-for="mode in modes" class="flex flex-wrap items-start gap-4 surface p-4" :class="mode">
        <em class="self-center">{{ mode }}</em>
        <ul :class="componentClass" class="max-w-100 min-w-80 flex-1">
          <li class="list-row">
            <span class="list-title">Item 1</span>
            <span class="list-subtitle">default separator</span>
          </li>
          <li class="list-row list-separator-inset">
            <span class="list-title">Item 2</span>
            <span class="list-subtitle">inset separator</span>
          </li>
          <li class="list-row list-separator-none after:content-['🙜_🙜_🙜']">
            <span class="list-title">Item 3</span>
            <span class="list-subtitle">no separator line</span>
          </li>
          <li class="list-row">
            <span class="list-title">Item 4</span>
            <span class="list-subtitle">Description for item 4</span>
          </li>
        </ul>
      </div>

      <h3>Interactive List (with columns)</h3>
      <div v-for="mode in modes" class="flex flex-wrap items-start gap-4 surface p-4" :class="mode">
        <em class="self-center">{{ mode }}</em>
        <ul :class="componentClass" class="max-w-100 min-w-80 flex-1">
          <li class="list-row list-row-interactive" tabindex="0">
            <div class="flex size-10 items-center justify-center rounded-full">A</div>
            <div class="list-col-grow">
              <h5 class="list-title">Alex Johnson</h5>
              <p class="list-subtitle">Software Engineer</p>
            </div>
            <div class="text-xs opacity-50">2m ago</div>
          </li>

          <li class="list-row list-row-interactive" tabindex="0">
            <div class="bg-secondary/20 flex h-10 w-10 items-center justify-center rounded-full">B</div>
            <div class="list-col-grow">
              <h5 class="list-title">Beatrix Smith</h5>
              <p class="list-subtitle">Product Designer</p>
            </div>
            <div class="text-xs opacity-50">1h ago</div>
          </li>

          <li
            v-for="(state, index) in ['', ...states]"
            class="list-row list-row-interactive"
            :class="state"
            tabindex="0"
            :inert="state === 'state-disabled'"
          >
            <div class="bg-error/20 flex h-10 w-10 items-center justify-center rounded-full">{{ index + 1 }}</div>
            <div class="list-col-grow">
              <h5 class="list-title">State example</h5>
              <p class="list-subtitle">{{ state || 'rest' }}</p>
            </div>
            <div class="text-xs opacity-50">Now</div>
          </li>
        </ul>
      </div>

      <h3>Layout Utilities (Grow & Wrap)</h3>
      <div v-for="mode in modes" class="flex flex-wrap items-start gap-4 surface p-4" :class="mode">
        <em class="self-center">{{ mode }}</em>
        <div :class="componentClass">
          <div class="list-row">
            <div class="bg-accent h-6 w-6 rounded-sm"></div>
            <div class="list-col-grow list-title">Growing Column</div>
            <div class="btn variant-style-soft size-xs">Action</div>
          </div>
          <div class="list-row">
            <div class="bg-info h-6 w-6 rounded-sm"></div>
            <div class="list-col-grow">
              <div class="list-title">Wrapped Content</div>
              <div class="list-col-wrap list-subtitle">
                This subtitle is marked as list-col-wrap, so it should span across all columns on a second row if the
                parent is a grid.
              </div>
            </div>
            <div class="btn variant-style-ghost size-xs">Edit</div>
          </div>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import DemoSelector from '/components/DemoSelector.vue';
import { demoSelectors, modes, states } from '/settings';

const componentClass = [`list`, ...demoSelectors];
</script>
