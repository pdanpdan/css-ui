<template>
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
</template>

<script setup lang="ts">
import { sizes, themes, variants } from '../settings';
</script>
