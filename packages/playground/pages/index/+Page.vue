<template>
  <article class="space-y-6" v-once>
    <h2>CSS-UI Design</h2>

    <section class="space-y-4">
      <h3>General considerations</h3>
      <p>CSS-UI builds upon TailwindCSS v4 and provides a flexible way to style CSS components.</p>
      <p>All components use design tokens for colors and geometry.</p>
      <p>The design tokens are set using four groups of utility classes:</p>
      <dl>
        <dt>Modes</dt>
        <dd v-html="modesList" />
        <dd>Configures CSS properties for auto/light/dark mode.</dd>

        <dt>Sizes</dt>
        <dd v-html="sizesList" />
        <dd>Sets the CSS properties for adjusting size of components.</dd>

        <dt>Themes</dt>
        <dd v-html="themesList" />
        <dd>Sets the CSS properties for adjusting the color of components.</dd>

        <dt>Variants</dt>
        <dd v-for="list in variantsList" v-html="list" />
        <dd>Sets the CSS properties for adjusting the final aspect of components.</dd>
      </dl>

      <p>
        The effect of the utility classes is inherited based on the DOM structure, and the result of combining utility
        classes from different groups is cummulative.
      </p>
      <p>
        The utility classes from groups <em>Modes</em>, <em>Sizes</em>, and <em>Themes</em> are designed to override
        each other using the normal CSS precedence rules.
      </p>
      <p>
        The utility classes from group <em>Variants</em> have more freedom - they cand override each other or act in a
        cummulative way.
      </p>
      <p>
        What is shown in this documentation is a sample set of utility classes, selected to showcase the power of the
        components library. They can be recreated and enhanced to fit your requirements.
      </p>
    </section>

    <section class="space-y-4">
      <h3>Mode examples</h3>

      <div class="flex flex-wrap max-lg:flex-col">
        <template v-for="s in surfaces" :key="s">
          <template v-for="m in modesAll" :key="m">
            <div class="flex-1/3 p-2">
              <div class="relative flex h-full flex-col items-center justify-center gap-2 p-4 pt-12" :class="[m, s]">
                <div class="inspect-class">
                  {{
                    [m, s]
                      .filter((t) => t)
                      .map((t) => `.${t}`)
                      .join('')
                  }}
                </div>
                <p>Text aspect on surface</p>
                <button type="button" class="btn theme-primary variant-style-soft">Button</button>
                <button type="button" class="btn theme-secondary variant-style-outlined">Button</button>
                <button type="button" class="btn theme-accent variant-style-filled">Button</button>
              </div>
            </div>
          </template>
        </template>
      </div>
    </section>

    <section class="space-y-4">
      <h3>Size examples</h3>

      <div class="flex flex-wrap max-lg:flex-col">
        <template v-for="s in sizes" :key="s">
          <div class="flex-1/3 p-2">
            <div class="relative flex h-full flex-col items-center justify-center gap-2 surface-lv-1 p-4 pt-12">
              <div class="inspect-class">
                {{
                  [s]
                    .filter((t) => t)
                    .map((t) => `.${t}`)
                    .join('')
                }}
              </div>
              <button type="button" class="btn theme-primary variant-style-soft" :class="s">Button</button>
            </div>
          </div>
        </template>
      </div>
    </section>

    <section class="space-y-4">
      <h3>Variant examples</h3>

      <div class="flex flex-wrap theme-primary max-lg:flex-col">
        <template v-for="v in ['', ...variants.style]" :key="v">
          <template v-for="m in ['', ...variants.density]" :key="m">
            <template v-for="r in ['', ...variants.shape]" :key="r">
              <template v-for="s in ['', ...variants.aspect]" :key="s">
                <div class="flex-1/3 p-2">
                  <div class="relative flex h-full flex-col items-center justify-center gap-2 surface-lv-1 p-4 pt-12">
                    <div class="inspect-class">
                      {{
                        [v, m, r, s]
                          .filter((t) => t)
                          .map((t) => `.${t}`)
                          .join('') || 'default'
                      }}
                    </div>
                    <button type="button" class="btn" :class="[v, m, r, s]">{{ s !== '' ? 'B' : 'Button' }}</button>
                  </div>
                </div>
              </template>
            </template>
          </template>
        </template>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import type { VariantTypes } from '../../settings';

import { modes, sizes, themes, variants, surfaces } from '../../settings';

const modesAll = ['mode-auto', ...modes];
const modesList = modesAll.map((v) => `<code>${v}</code>`).join(' | ');
const sizesList = sizes.map((v) => `<code>${v}</code>`).join(' | ');
const themesList = themes.map((v) => `<code>${v}</code>`).join(' | ');
const variantsList = Object.keys(variants).map(
  (v) => `<em>${v}</em>: ${variants[v as VariantTypes].map((v) => `<code>${v}</code>`).join(' | ')}`,
);
</script>
