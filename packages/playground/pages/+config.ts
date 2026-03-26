import type { Config } from 'vike/types';

import vikeVue from 'vike-vue/config';

export default {
  bodyAttributes: {
    class: 'surface mode-auto',
  },

  extends: [vikeVue],

  prerender: true,

  stream: true,

  title: 'CSS-UI Library Demo',
} satisfies Config;
