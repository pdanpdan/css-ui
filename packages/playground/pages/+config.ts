import type { Config } from 'vike/types';

import vikeVue from 'vike-vue/config';

import Layout from './Layout.vue';

export default {
  Layout,
  bodyAttributes: {
    class: 'surface mode-auto',
  },

  extends: [vikeVue],

  prerender: true,

  stream: true,

  title: 'CSS-UI Library Demo',
} satisfies Config;
