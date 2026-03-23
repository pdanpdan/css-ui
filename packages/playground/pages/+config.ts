import type { Config } from 'vike/types';

import vikeVue from 'vike-vue/config';

import Layout from './Layout.vue';

export default {
  prerender: true,
  stream: true,

  title: 'CSS-UI Library Demo',

  bodyAttributes: {
    class: 'surface mode-auto',
  },

  Layout,

  extends: [vikeVue],
} satisfies Config;
