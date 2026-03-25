<template>
  <div
    v-for="(sel, i) in [themes, sizes, variants.style, variants.density, variants.shape, variants.aspect]"
    class="flex items-center gap-4 variant-density-dense"
  >
    <input
      v-for="v in ['', ...sel]"
      :key="v"
      class="btn checked:variant-style-filled"
      :class="v"
      type="radio"
      :name="`group${i}`"
      :value="v"
      :aria-label="v.split('-').at(-1) || 'inherited'"
      :checked="v === ''"
    />
  </div>
</template>

<script setup lang="ts">
import { sizes, themes, variants } from '../settings';
</script>
