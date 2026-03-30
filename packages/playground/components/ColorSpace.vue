<script lang="ts" setup>
import IconWarning from '/components/IconWarning.vue';
import { converter, inGamut } from 'culori';
import { computed } from 'vue';

const { color } = defineProps<{
  color: string;
}>();

const inRgbSpace = inGamut('rgb');
const inP3Space = inGamut('p3');
const oklch = converter('oklch');

const space = computed(() => {
  const oklchColor = oklch(color);

  if (oklchColor != null) {
    if (oklchColor.l <= 0 || oklchColor.l >= 1 || oklchColor.c <= 0.001 || inRgbSpace(oklchColor)) {
      return {
        name: 'RGB',
        class: 'theme-success',
      };
    }

    if (inP3Space(oklchColor)) {
      return {
        name: 'P3',
        class: 'theme-neutral',
      };
    }
  }

  return {
    name: false,
    class: 'theme-warning',
  };
});
</script>

<template>
  <div class="w-8 shrink-0 text-center text-theme" :class="space.class">
    <template v-if="typeof space.name === 'string'">[{{ space.name }}]</template>
    <IconWarning v-else class="w-6 shrink-0 text-theme theme-warning" />
  </div>
</template>
