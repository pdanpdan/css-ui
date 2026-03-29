<template>
  <article class="space-y-6" v-once>
    <h2>Button</h2>

    <section class="group space-y-4">
      <h3>Playground</h3>

      <h4>
        Options (page defaults are <code>size-md</code> + <code>theme-neutral</code> + <code>variant-style-soft</code>)
      </h4>
      <DemoSelector />

      <h4>Button</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em class="max-lg:w-full">{{ mode }}</em>
        <template v-for="s in ['', ...states]" :key="s">
          <button type="button" :class="[...componentClass, s]">{{ s || 'rest' }}</button>
        </template>
      </div>

      <h4>Link</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em class="max-lg:w-full">{{ mode }}</em>
        <template v-for="s in ['', ...states]" :key="s">
          <a href="#" :class="[...componentClass, s]" :inert="s === 'state-disabled'">{{ s || 'rest' }}</a>
        </template>
      </div>

      <h4>Radio</h4>
      <div v-for="(mode, i) in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em class="max-lg:w-full">{{ mode }}</em>
        <div class="flex flex-1 flex-wrap items-center gap-4">
          <template v-for="s in ['', ...states]" :key="s">
            <input
              type="radio"
              :class="[...componentClass, s]"
              :disabled="s === 'state-disabled'"
              :checked="s === 'state-active'"
              :aria-label="s || 'rest'"
              inert
            />
          </template>
          <div class="w-full" />
          <template v-for="s in 5" :key="s">
            <input
              type="radio"
              :class="[...componentClass]"
              :name="`group1_${i}`"
              :value="s"
              :aria-label="`val ${s}`"
            />
          </template>
        </div>
      </div>

      <h4>Checkbox</h4>
      <div v-for="(mode, i) in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em class="max-lg:w-full">{{ mode }}</em>
        <div class="flex flex-1 flex-wrap items-center gap-4">
          <template v-for="s in ['', ...states]" :key="s">
            <input
              type="checkbox"
              :class="[...componentClass, s]"
              :disabled="s === 'state-disabled'"
              :checked="s === 'state-active'"
              :aria-label="s || 'rest'"
              inert
            />
          </template>
          <div class="w-full" />
          <template v-for="s in 5" :key="s">
            <input
              type="checkbox"
              :class="[...componentClass]"
              :name="`group2_${i}`"
              :value="s"
              :aria-label="`val ${s}`"
            />
          </template>
        </div>
      </div>

      <h4>Radio label</h4>
      <div v-for="(mode, i) in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em class="max-lg:w-full">{{ mode }}</em>
        <div class="flex flex-1 flex-wrap items-center gap-4">
          <template v-for="s in ['', ...states]" :key="s">
            <label :class="[...componentClass, s]" :disabled="s === 'state-disabled'" inert>
              <input type="radio" :disabled="s === 'state-disabled'" :checked="s === 'state-active'" />
              {{ s || 'rest' }}
            </label>
          </template>
          <div class="w-full" />
          <template v-for="s in 5" :key="s">
            <label :class="[...componentClass]">
              <input type="radio" :name="`group3_${i}`" :value="s" />
              {{ `val ${s}` }}
            </label>
          </template>
        </div>
      </div>

      <h4>Checkbox label</h4>
      <div v-for="(mode, i) in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em class="max-lg:w-full">{{ mode }}</em>
        <div class="flex flex-1 flex-wrap items-center gap-4">
          <template v-for="s in ['', ...states]" :key="s">
            <label :class="[...componentClass, s]" :disabled="s === 'state-disabled'" inert>
              <input type="checkbox" :disabled="s === 'state-disabled'" :checked="s === 'state-active'" />
              {{ s || 'rest' }}
            </label>
          </template>
          <div class="w-full" />
          <template v-for="s in 5" :key="s">
            <label :class="[...componentClass]">
              <input type="checkbox" :name="`group4_${i}`" :value="s" />
              {{ `val ${s}` }}
            </label>
          </template>
        </div>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import DemoSelector from '/components/DemoSelector.vue';
import { demoSelectors, modes, states } from '/settings';

const componentClass = [`btn`, ...demoSelectors];
</script>
