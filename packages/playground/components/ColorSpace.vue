<script lang="ts" setup>
import IconWarning from '/components/IconWarning.vue';
import { inGamut } from 'culori';
import { computed } from 'vue';

const { color } = defineProps<{
  color: string;
}>();

const inRgbSpace = inGamut('rgb');
const inP3Space = inGamut('p3');

const space = computed(() => {
  if (inRgbSpace(color)) {
    return {
      name: 'RGB',
      class: 'theme-success',
    };
  }

  if (inP3Space(color)) {
    return {
      name: 'P3',
      class: 'theme-neutral',
    };
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
