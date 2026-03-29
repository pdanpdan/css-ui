<script lang="ts" setup>
import { matchHref, normalizeHref } from '/lib/url';
import { usePageContext } from 'vike-vue/usePageContext';
import { computed } from 'vue';

const { href } = defineProps<{
  href: string;
}>();

const pageContext = usePageContext();

const normalizedHref = computed(() => normalizeHref(href));

const active = computed(() => matchHref(href, pageContext.urlPathname));
</script>

<template>
  <slot :active :href="normalizedHref" />
</template>
