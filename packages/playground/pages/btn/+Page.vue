<template>
  <article class="space-y-6" v-once>
    <h2>Button</h2>

    <section class="group space-y-4">
      <h3>Playground</h3>

      <h4>Options (page defaults are <code>size-md</code> + <code>theme-neutral</code> + <code>variant-soft</code>)</h4>
      <div
        v-for="(sel, i) in [themes, sizes, variants.color, variants.density, variants.radius, variants.shape]"
        class="flex items-center gap-4"
      >
        <input
          v-for="v in ['', ...sel]"
          :key="v"
          class="btn checked:variant-filled"
          :class="v"
          type="radio"
          :name="`group${i}`"
          :value="v"
          :aria-label="v.split('-').at(-1) || (i > 2 ? 'default' : 'inherited')"
          :checked="v === ''"
        />
      </div>

      <h4>Button</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em>{{ mode }}</em>
        <template v-for="s in ['', ...states]" :key="s">
          <button type="button" :class="[...componentClass, s]">{{ s || 'rest' }}</button>
        </template>
      </div>

      <h4>Link</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em>{{ mode }}</em>
        <template v-for="s in ['', ...states]" :key="s">
          <a href="#" :class="[...componentClass, s]" :inert="s === 'state-disabled'">{{ s || 'rest' }}</a>
        </template>
      </div>

      <h4>Radio</h4>
      <div v-for="(mode, i) in modes" class="flex flex-wrap items-center gap-4 surface p-4" :class="mode">
        <em>{{ mode }}</em>
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
        <em>{{ mode }}</em>
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
        <em>{{ mode }}</em>
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
        <em>{{ mode }}</em>
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
import { modes, sizes, themes, variants, states } from '../settings';

const componentClass = [
  `btn`,


  `group-has-[[value='size-xs']:checked]:size-xs`,
  `group-has-[[value='size-sm']:checked]:size-sm`,
  `group-has-[[value='size-md']:checked]:size-md`,
  `group-has-[[value='size-lg']:checked]:size-lg`,
  `group-has-[[value='size-xl']:checked]:size-xl`,


  `group-has-[[value='theme-neutral']:checked]:theme-neutral`,
  `group-has-[[value='theme-primary']:checked]:theme-primary`,
  `group-has-[[value='theme-secondary']:checked]:theme-secondary`,
  `group-has-[[value='theme-accent']:checked]:theme-accent`,
  `group-has-[[value='theme-success']:checked]:theme-success`,
  `group-has-[[value='theme-warning']:checked]:theme-warning`,
  `group-has-[[value='theme-error']:checked]:theme-error`,
  `group-has-[[value='theme-info']:checked]:theme-info`,


  `group-has-[[value='variant-filled']:checked]:variant-filled`,
  `group-has-[[value='variant-soft']:checked]:variant-soft`,
  `group-has-[[value='variant-outlined']:checked]:variant-outlined`,
  `group-has-[[value='variant-ghost']:checked]:variant-ghost`,


  `group-has-[[value='variant-dense']:checked]:variant-dense`,
  `group-has-[[value='variant-lax']:checked]:variant-lax`,


  `group-has-[[value='variant-pill']:checked]:variant-pill`,
  `group-has-[[value='variant-sharp']:checked]:variant-sharp`,


  `group-has-[[value='variant-square']:checked]:variant-square`,
];
</script>
