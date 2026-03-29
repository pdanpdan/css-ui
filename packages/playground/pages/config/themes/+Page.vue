<template>
  <article class="space-y-8">
    <h2>Theme Generator</h2>
    <p>Create, manage, and preview OKLCH themes.</p>

    <p v-if="!isLoaded" class="text-center">Loading configuration...</p>

    <div v-else class="flex flex-col gap-8 xl:flex-row xl:items-start">
      <div class="flex shrink-0 flex-col gap-8 xl:w-1/3">
        <section class="card">
          <div class="card-title flex flex-wrap items-center pb-2">
            Theme Groups
            <button
              type="button"
              class="btn ms-auto theme-success variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
              aria-label="Add new group"
              @click="addGroup"
            >
              <IconPlus />
            </button>
          </div>
          <ul class="card-bleed list py-0 variant-style-ghost variant-shape-sharp">
            <li
              v-for="group in groups"
              :key="group.id"
              class="list-row list-row-interactive"
              :class="{ 'state-active': selectedGroupId === group.id }"
            >
              <div class="list-col-grow list-title">{{ group.name }}</div>

              <button type="button" class="list-row-action" @click="selectGroup(group.id)" />

              <button
                type="button"
                class="btn z-1 variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                aria-label="Copy group CSS"
                @click="copyGroupCss(group)"
              >
                <IconCopy />
              </button>

              <button
                type="button"
                class="btn z-1 theme-error variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                aria-label="Remove group"
                @click="removeGroup(group.id)"
              >
                <IconTrash />
              </button>
            </li>
          </ul>
        </section>

        <section v-if="selectedGroup" class="card">
          <div class="card-title flex flex-wrap items-center pb-2">
            Themes in:
            <input type="text" v-model="selectedGroup.name" class="form-input" />
            <button
              type="button"
              class="btn ms-auto theme-neutral variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
              aria-label="Import from CSS"
              @click="isImporting = !isImporting"
            >
              <IconUpload />
            </button>
            <button
              type="button"
              class="btn ms-2 variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
              aria-label="Copy group CSS"
              @click="copyGroupCss(selectedGroup)"
            >
              <IconCopy />
            </button>

            <button
              type="button"
              class="btn ms-2 theme-success variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
              aria-label="Add new theme"
              @click="addTheme"
            >
              <IconPlus />
            </button>
          </div>

          <div v-if="isImporting" class="card-bleed flex flex-col gap-2 bg-surface-2 p-4">
            <textarea
              v-model="importCssText"
              class="form-input min-h-32 w-full font-mono text-xs"
              placeholder="Paste CSS here..."
            ></textarea>
            <div class="flex items-center justify-between">
              <button
                type="button"
                class="btn theme-neutral variant-density-dense variant-style-ghost size-sm"
                @click="isImporting = false"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn theme-primary variant-density-dense variant-style-filled size-sm"
                @click="importThemesFromCss"
              >
                Import
              </button>
            </div>
          </div>

          <ul class="card-bleed list py-0 variant-style-ghost variant-shape-sharp">
            <li
              v-for="theme in selectedGroup.themes"
              :key="theme.id"
              class="list-row list-row-interactive"
              :class="{ 'state-active': selectedThemeId === theme.id }"
            >
              <div class="list-col-grow list-title">{{ theme.name }}</div>

              <button type="button" class="list-row-action" @click="selectTheme(theme.id)" />

              <button
                type="button"
                class="btn z-1 variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                aria-label="Copy theme CSS"
                @click="copyThemeCss(theme)"
              >
                <IconCopy />
              </button>

              <button
                type="button"
                class="btn z-1 theme-error variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                aria-label="Delete theme"
                @click="removeTheme(theme.id)"
              >
                <IconTrash />
              </button>
            </li>
          </ul>
        </section>
      </div>

      <div v-if="selectedGroup" class="flex shrink-0 flex-col gap-8 xl:w-2/3">
        <section v-if="editingTheme" class="card">
          <div class="card-title flex flex-wrap items-center pb-2">
            Edit Theme:
            <input
              type="text"
              :value="editingTheme.name"
              @input="
                editingTheme.name = ($event.target as HTMLInputElement).value.toLowerCase().replace(/[^a-z0-9-_]/g, '-')
              "
              class="form-input"
            />
            <button
              type="button"
              class="btn ms-auto theme-neutral variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
              aria-label="Undo changes"
              @click="undoChanges"
            >
              <IconRotateCcw />
            </button>
            <button
              type="button"
              class="btn ms-2 theme-primary variant-density-dense variant-style-ghost variant-aspect-square size-md variant-shape-pill"
              aria-label="Save changes"
              @click="saveTheme"
            >
              <IconSave />
            </button>
          </div>

          <div class="form-layout grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="form-group space-y-2">
              <div class="form-label">Hue (deg)</div>
              <p class="form-help">Defines the color family (0-360).</p>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Light:</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  :value="getVal('h', 'light')"
                  @input="updateValue('h', 'light', $event)"
                  class="form-range flex-1"
                  :style="{ '--range-gradient': hueGradient }"
                />
                <button
                  type="button"
                  class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                  aria-label="Copy hue to dark"
                  @click="copyValue('h', 'light')"
                >
                  <IconCopyToDark />
                </button>
                <input
                  type="number"
                  min="0"
                  max="360"
                  :value="getVal('h', 'light')"
                  @input="updateValue('h', 'light', $event)"
                  class="form-input w-16 text-end"
                />
              </div>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Dark:</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  :value="getVal('h', 'dark')"
                  @input="updateValue('h', 'dark', $event)"
                  class="form-range flex-1"
                  :style="{ '--range-gradient': hueGradient }"
                />
                <button
                  type="button"
                  class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                  aria-label="Copy hue to light"
                  @click="copyValue('h', 'dark')"
                >
                  <IconCopyToLight />
                </button>
                <input
                  type="number"
                  min="0"
                  max="360"
                  :value="getVal('h', 'dark')"
                  @input="updateValue('h', 'dark', $event)"
                  class="form-input w-16 text-end"
                />
              </div>
            </div>

            <div class="form-group space-y-2">
              <div class="form-label">Chroma</div>
              <p class="form-help">Defines the color intensity/vibrancy (0.00 - 0.40).</p>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Light:</span>
                <input
                  type="range"
                  min="0"
                  max="0.4"
                  step="0.01"
                  :value="getVal('c', 'light')"
                  @input="updateValue('c', 'light', $event)"
                  class="form-range flex-1"
                  :style="{ '--range-gradient': getChromaGradient('light') }"
                />
                <button
                  type="button"
                  class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                  aria-label="Copy chroma to dark"
                  @click="copyValue('c', 'light')"
                >
                  <IconCopyToDark />
                </button>
                <input
                  type="number"
                  min="0"
                  max="0.4"
                  step="0.01"
                  :value="getVal('c', 'light')"
                  @input="updateValue('c', 'light', $event)"
                  class="form-input w-16 text-end"
                />
              </div>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Dark:</span>
                <input
                  type="range"
                  min="0"
                  max="0.4"
                  step="0.01"
                  :value="getVal('c', 'dark')"
                  @input="updateValue('c', 'dark', $event)"
                  class="form-range flex-1"
                  :style="{ '--range-gradient': getChromaGradient('dark') }"
                />
                <button
                  type="button"
                  class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                  aria-label="Copy chroma to light"
                  @click="copyValue('c', 'dark')"
                >
                  <IconCopyToLight />
                </button>
                <input
                  type="number"
                  min="0"
                  max="0.4"
                  step="0.01"
                  :value="getVal('c', 'dark')"
                  @input="updateValue('c', 'dark', $event)"
                  class="form-input w-16 text-end"
                />
              </div>
            </div>

            <div class="form-group space-y-2">
              <div class="form-label">Lightness (%)</div>
              <p class="form-help">Defines how bright the background is (0 - 100).</p>
              <div class="flex items-center gap-4">
                <span class="flex w-14 items-center gap-2 text-sm">
                  Light:
                  <IconWarning v-if="!isValidColor('light')" class="shrink-0 text-theme theme-warning" />
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  :value="getVal('l', 'light')"
                  @input="updateValue('l', 'light', $event)"
                  class="form-range flex-1"
                  :style="{ '--range-gradient': getLightnessGradient('light') }"
                />
                <button
                  type="button"
                  class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                  aria-label="Copy lightness to dark"
                  @click="copyValue('l', 'light')"
                >
                  <IconCopyToDark />
                </button>
                <input
                  type="number"
                  min="0"
                  max="100"
                  :value="getVal('l', 'light')"
                  @input="updateValue('l', 'light', $event)"
                  class="form-input w-16 text-end"
                />
              </div>
              <div class="flex items-center gap-4">
                <span class="flex w-14 items-center gap-2 text-sm">
                  Dark:
                  <IconWarning v-if="!isValidColor('dark')" class="shrink-0 text-theme theme-warning" />
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  :value="getVal('l', 'dark')"
                  @input="updateValue('l', 'dark', $event)"
                  class="form-range flex-1"
                  :style="{ '--range-gradient': getLightnessGradient('dark') }"
                />
                <button
                  type="button"
                  class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                  aria-label="Copy lightness to light"
                  @click="copyValue('l', 'dark')"
                >
                  <IconCopyToLight />
                </button>
                <input
                  type="number"
                  min="0"
                  max="100"
                  :value="getVal('l', 'dark')"
                  @input="updateValue('l', 'dark', $event)"
                  class="form-input w-16 text-end"
                />
              </div>
            </div>

            <div class="form-group space-y-2">
              <div class="form-label">Foreground Lightness (%)</div>
              <p class="form-help">Forces text to be light (e.g. 99) or dark (e.g. 10) on filled buttons.</p>
              <div class="flex items-center gap-4">
                <span class="flex w-14 items-center gap-2 text-sm">
                  Light:
                  <IconWarning v-if="!isValidColor('light', true)" class="shrink-0 text-theme theme-warning" />
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  :value="getVal('onMainL', 'light')"
                  @input="updateValue('onMainL', 'light', $event)"
                  class="form-range flex-1"
                  :style="{ '--range-gradient': getOnMainLightnessGradient('light') }"
                />
                <button
                  type="button"
                  class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                  aria-label="Copy foreground lightness to dark"
                  @click="copyValue('onMainL', 'light')"
                >
                  <IconCopyToDark />
                </button>
                <input
                  type="number"
                  min="0"
                  max="100"
                  :value="getVal('onMainL', 'light')"
                  @input="updateValue('onMainL', 'light', $event)"
                  class="form-input w-16 text-end"
                />
              </div>
              <div class="flex items-center gap-4">
                <span class="flex w-14 items-center gap-2 text-sm">
                  Dark:
                  <IconWarning v-if="!isValidColor('dark', true)" class="shrink-0 text-theme theme-warning" />
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  :value="getVal('onMainL', 'dark')"
                  @input="updateValue('onMainL', 'dark', $event)"
                  class="form-range flex-1"
                  :style="{ '--range-gradient': getOnMainLightnessGradient('dark') }"
                />
                <button
                  type="button"
                  class="btn theme-neutral variant-density-dense variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                  aria-label="Copy foreground lightness to light"
                  @click="copyValue('onMainL', 'dark')"
                >
                  <IconCopyToLight />
                </button>
                <input
                  type="number"
                  min="0"
                  max="100"
                  :value="getVal('onMainL', 'dark')"
                  @input="updateValue('onMainL', 'dark', $event)"
                  class="form-input w-16 text-end"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="flex flex-col gap-6">
          <h3>
            Live Preview
            <span class="ml-2 text-sm font-normal opacity-60">
              {{ editingTheme ? 'Unsaved changes are previewed live' : `Viewing all themes in ${selectedGroup.name}` }}
            </span>
          </h3>

          <div
            v-for="theme in themesToPreview"
            :key="theme.id"
            class="theme-preview card surface-themed variant-style-soft"
            :style="getPreviewCss(theme)"
          >
            <div class="card-title">{{ theme.name }}</div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div v-for="mode in modes" :key="mode" class="card surface" :class="mode">
                <div class="card-title">{{ mode }}</div>
                <div v-for="variant in variantsStyle" :key="variant" class="space-y-2">
                  <div class="text-xs tracking-wide uppercase opacity-70">
                    {{ variant.replace('variant-style-', '') }}
                  </div>
                  <div class="flex flex-wrap gap-2">
                    <button
                      v-for="state in statesList"
                      :key="state.class"
                      type="button"
                      class="btn"
                      :class="[variant, state.class]"
                      :disabled="state.label === 'disabled'"
                    >
                      {{ state.label }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import IconCopy from '/components/IconCopy.vue';
import IconCopyToDark from '/components/IconCopyToDark.vue';
import IconCopyToLight from '/components/IconCopyToLight.vue';
import IconPlus from '/components/IconPlus.vue';
import IconRotateCcw from '/components/IconRotateCcw.vue';
import IconSave from '/components/IconSave.vue';
import IconTrash from '/components/IconTrash.vue';
import IconUpload from '/components/IconUpload.vue';
import IconWarning from '/components/IconWarning.vue';
import { modes, states, variants } from '/settings';
import { computed, onMounted, ref, watch } from 'vue';

type ThemeConfigValueKeys =
  | 'hBase'
  | 'hSlope'
  | 'cBase'
  | 'cSlope'
  | 'lBase'
  | 'lSlope'
  | 'onMainLBase'
  | 'onMainLSlope';

interface ThemeConfig {
  id: string;
  name: string;
  hBase: number;
  hSlope: number;
  cBase: number;
  cSlope: number;
  lBase: number;
  lSlope: number;
  onMainLBase: number;
  onMainLSlope: number;
}

interface ThemeGroup {
  id: string;
  name: string;
  themes: ThemeConfig[];
}

const STORAGE_KEY = 'oklch-theme-groups';

const variantsStyle = variants.style;

const statesList = ['', ...states].map((state) => ({
  class: state,
  label: state.split('-').slice(1).join('-') || 'rest',
}));

const defaultGroups: ThemeGroup[] = [
  {
    id: 'grp-default',
    name: 'Default Palette',
    themes: [
      {
        cBase: 0,
        cSlope: 0,
        hBase: 0,
        hSlope: 0,
        id: 'th-neutral',
        lBase: 54,
        lSlope: -38,
        name: 'neutral',
        onMainLBase: 54.5,
        onMainLSlope: 44.5,
      },
      {
        cBase: 0.16,
        cSlope: 0,
        hBase: 250,
        hSlope: 0,
        id: 'th-primary',
        lBase: 45,
        lSlope: 0,
        name: 'primary',
        onMainLBase: 99,
        onMainLSlope: 0,
      },
      {
        cBase: 0.08,
        cSlope: 0,
        hBase: 210,
        hSlope: 0,
        id: 'th-secondary',
        lBase: 55,
        lSlope: 0,
        name: 'secondary',
        onMainLBase: 99,
        onMainLSlope: 0,
      },
      {
        cBase: 0.18,
        cSlope: 0,
        hBase: 45,
        hSlope: 0,
        id: 'th-accent',
        lBase: 60,
        lSlope: 0,
        name: 'accent',
        onMainLBase: 99,
        onMainLSlope: 0,
      },
      {
        cBase: 0.22,
        cSlope: 0,
        hBase: 145,
        hSlope: 0,
        id: 'th-success',
        lBase: 55,
        lSlope: 0,
        name: 'success',
        onMainLBase: 99,
        onMainLSlope: 0,
      },
      {
        cBase: 0.24,
        cSlope: 0,
        hBase: 90,
        hSlope: 0,
        id: 'th-warning',
        lBase: 85,
        lSlope: 0,
        name: 'warning',
        onMainLBase: 10,
        onMainLSlope: 0,
      },
      {
        cBase: 0.18,
        cSlope: 0,
        hBase: 25,
        hSlope: 0,
        id: 'th-error',
        lBase: 52,
        lSlope: 0,
        name: 'error',
        onMainLBase: 99,
        onMainLSlope: 0,
      },
      {
        cBase: 0.24,
        cSlope: 0,
        hBase: 225,
        hSlope: 0,
        id: 'th-info',
        lBase: 40,
        lSlope: 0,
        name: 'info',
        onMainLBase: 99,
        onMainLSlope: 0,
      },
    ],
  },
];

const isLoaded = ref(false);
const groups = ref<ThemeGroup[]>([]);
const selectedGroupId = ref<string | null>(null);
const selectedThemeId = ref<string | null>(null);
const editingTheme = ref<ThemeConfig | null>(null);
const isImporting = ref(false);
const importCssText = ref('');

const selectedGroup = computed(() => groups.value.find((group) => group.id === selectedGroupId.value));
const selectedTheme = computed(() => selectedGroup.value?.themes.find((theme) => theme.id === selectedThemeId.value));

const themesToPreview = computed(() => {
  if (editingTheme.value) {
    return [editingTheme.value];
  }
  if (selectedGroup.value) {
    return selectedGroup.value.themes;
  }
  return [];
});

function getPreviewCss(theme: ThemeConfig): Record<string, string | number> {
  return {
    '--t-c-base': theme.cBase,
    '--t-c-slope': theme.cSlope,
    '--t-h-base': theme.hBase,
    '--t-h-slope': theme.hSlope,
    '--t-l-base': `${theme.lBase}%`,
    '--t-l-slope': `${theme.lSlope}%`,
    '--t-on-main-l-base': `${theme.onMainLBase}%`,
    '--t-on-main-l-slope': `${theme.onMainLSlope}%`,
  };
}

function generateId(): string {
  return `id-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 7)}`;
}

function selectGroup(groupId: string): void {
  selectedGroupId.value = groupId;
  selectedThemeId.value = null;
}

function addGroup(): void {
  const newGroup: ThemeGroup = {
    id: generateId(),
    name: 'New Group',
    themes: [],
  };
  groups.value.push(newGroup);
  selectGroup(newGroup.id);
}

function removeGroup(groupId: string): void {
  groups.value = groups.value.filter((group) => group.id !== groupId);
  if (selectedGroupId.value === groupId) {
    selectedGroupId.value = groups.value.length ? groups.value[0].id : null;
    selectedThemeId.value = null;
  }
}

function selectTheme(themeId: string): void {
  selectedThemeId.value = selectedThemeId.value === themeId ? null : themeId;
}

function addTheme(): void {
  if (!selectedGroup.value) {
    return;
  }
  const newTheme: ThemeConfig = {
    cBase: 0.1,
    cSlope: 0,
    hBase: 0,
    hSlope: 0,
    id: generateId(),
    lBase: 50,
    lSlope: 0,
    name: 'New Theme',
    onMainLBase: 99,
    onMainLSlope: 0,
  };
  selectedGroup.value.themes.push(newTheme);
  selectedThemeId.value = newTheme.id;
}

function removeTheme(themeId: string): void {
  if (!selectedGroup.value) {
    return;
  }
  selectedGroup.value.themes = selectedGroup.value.themes.filter((theme) => theme.id !== themeId);
  if (selectedThemeId.value === themeId) {
    selectedThemeId.value = null;
  }
}

function importThemesFromCss(): void {
  if (!selectedGroup.value || !importCssText.value) {
    return;
  }

  const { themes } = selectedGroup.value;
  const themeBlocks = importCssText.value.matchAll(/(?:@utility\s+)?(?:theme-)?([a-z0-9-_]+)\s*\{([^}]*)\}/gi);

  for (const block of themeBlocks) {
    const name = block[1].toLowerCase();
    const content = block[2];

    const config: Partial<ThemeConfig> = { name };

    const props = content.matchAll(/--t-([a-z-]+)-(base|slope):\s*([-0-9.]+)(%?)/gi);
    for (const prop of props) {
      const type = prop[1];
      const part = prop[2];
      const val = parseFloat(prop[3]);

      let key = '';
      if (type === 'h') {
        key = 'h';
      } else if (type === 'c') {
        key = 'c';
      } else if (type === 'l') {
        key = 'l';
      } else if (type === 'on-main-l') {
        key = 'onMainL';
      }

      if (key) {
        const fullKey = `${key}${part.charAt(0).toUpperCase()}${part.slice(1)}`;
        config[fullKey as ThemeConfigValueKeys] = val;
      }
    }

    if (Object.keys(config).length > 1) {
      const existing = themes.find((theme) => theme.name === name);
      if (existing) {
        Object.assign(existing, {
          cBase: config.cBase ?? existing.cBase,
          cSlope: config.cSlope ?? existing.cSlope,
          hBase: config.hBase ?? existing.hBase,
          hSlope: config.hSlope ?? existing.hSlope,
          lBase: config.lBase ?? existing.lBase,
          lSlope: config.lSlope ?? existing.lSlope,
          onMainLBase: config.onMainLBase ?? existing.onMainLBase,
          onMainLSlope: config.onMainLSlope ?? existing.onMainLSlope,
        });
      } else {
        themes.push({
          cBase: config.cBase ?? 0,
          cSlope: config.cSlope ?? 0,
          hBase: config.hBase ?? 0,
          hSlope: config.hSlope ?? 0,
          id: generateId(),
          lBase: config.lBase ?? 50,
          lSlope: config.lSlope ?? 0,
          name,
          onMainLBase: config.onMainLBase ?? 99,
          onMainLSlope: config.onMainLSlope ?? 0,
        });
      }
    }
  }

  isImporting.value = false;
  importCssText.value = '';
}

function updateValue(prefix: string, mode: 'light' | 'dark', event: Event): void {
  if (!editingTheme.value) {
    return;
  }
  const val = parseFloat((event.target as HTMLInputElement).value);
  const baseKey = `${prefix}Base` as keyof ThemeConfig;
  const slopeKey = `${prefix}Slope` as keyof ThemeConfig;

  let light = (editingTheme.value[baseKey] as number) + (editingTheme.value[slopeKey] as number);
  let dark = (editingTheme.value[baseKey] as number) - (editingTheme.value[slopeKey] as number);

  if (mode === 'light') {
    light = val;
  } else {
    dark = val;
  }

  (editingTheme.value[baseKey] as number) = (light + dark) / 2;
  (editingTheme.value[slopeKey] as number) = (light - dark) / 2;
}

function getVal(prefix: string, mode: 'light' | 'dark'): number {
  if (!editingTheme.value) {
    return 0;
  }
  const base = editingTheme.value[`${prefix}Base` as keyof ThemeConfig] as number;
  const slope = editingTheme.value[`${prefix}Slope` as keyof ThemeConfig] as number;
  return mode === 'light' ? base + slope : base - slope;
}

function isValidColor(mode: 'light' | 'dark', onMain = false): boolean {
  if (!editingTheme.value) {
    return true;
  }
  const hue = getVal('h', mode);
  const chroma = getVal('c', mode);
  const lightness = getVal(onMain ? 'onMainL' : 'l', mode);

  if (lightness <= 0 || lightness >= 100) {
    return true;
  }
  if (chroma <= 0.001) {
    return true;
  }

  // OKLCH -> OKLab
  const l_val = lightness / 100;
  const a = chroma * Math.cos((hue * Math.PI) / 180);
  const b = chroma * Math.sin((hue * Math.PI) / 180);

  // OKLab -> LMS
  const l_ = l_val + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l_val - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l_val - 0.0894841775 * a - 1.291485548 * b;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  // LMS -> Linear sRGB
  const rL = 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const gL = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const bL = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.7076065408 * s3;

  const eps = 0.001;
  return rL >= -eps && rL <= 1 + eps && gL >= -eps && gL <= 1 + eps && bL >= -eps && bL <= 1 + eps;
}

function copyValue(prefix: string, fromMode: 'light' | 'dark'): void {
  if (!editingTheme.value) {
    return;
  }
  const toMode = fromMode === 'light' ? 'dark' : 'light';
  const val = getVal(prefix, fromMode);

  const baseKey = `${prefix}Base` as keyof ThemeConfig;
  const slopeKey = `${prefix}Slope` as keyof ThemeConfig;

  let light = (editingTheme.value[baseKey] as number) + (editingTheme.value[slopeKey] as number);
  let dark = (editingTheme.value[baseKey] as number) - (editingTheme.value[slopeKey] as number);

  if (toMode === 'light') {
    light = val;
  } else {
    dark = val;
  }

  (editingTheme.value[baseKey] as number) = (light + dark) / 2;
  (editingTheme.value[slopeKey] as number) = (light - dark) / 2;
}

const hueGradient =
  'linear-gradient(to right, oklch(70% 0.25 0), oklch(70% 0.25 60), oklch(70% 0.25 120), oklch(70% 0.25 180), oklch(70% 0.25 240), oklch(70% 0.25 300), oklch(70% 0.25 360))';

function getChromaGradient(mode: 'light' | 'dark'): string {
  const hue = getVal('h', mode);
  return `linear-gradient(to right, oklch(70% 0 ${hue}), oklch(70% 0.4 ${hue}))`;
}

function getLightnessGradient(mode: 'light' | 'dark'): string {
  const hue = getVal('h', mode);
  const chroma = getVal('c', mode);
  return `linear-gradient(to right, oklch(0% ${chroma} ${hue}), oklch(100% ${chroma} ${hue}))`;
}

function getOnMainLightnessGradient(mode: 'light' | 'dark'): string {
  const hue = getVal('h', mode);
  const chroma = getVal('c', mode);
  return `linear-gradient(to right, oklch(0% ${chroma} ${hue}), oklch(100% ${chroma} ${hue}))`;
}

function sanitizeThemeName(name: string): string {
  const sanitized = name
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  return sanitized.startsWith('theme-') ? sanitized : `theme-${sanitized}`;
}

function saveTheme(): void {
  if (selectedTheme.value && editingTheme.value) {
    editingTheme.value.name = sanitizeThemeName(editingTheme.value.name).replace(/^theme-/, '');
    Object.assign(selectedTheme.value, editingTheme.value);
  }
}

function undoChanges(): void {
  if (selectedTheme.value) {
    editingTheme.value = { ...selectedTheme.value };
  }
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.warn('Failed to copy to clipboard', error);
  }
}

function generateThemeCss(theme: ThemeConfig): string {
  const name = sanitizeThemeName(theme.name);
  return `@utility ${name} {\n  --t-h-base: ${theme.hBase};\n  --t-h-slope: ${theme.hSlope};\n  --t-c-base: ${theme.cBase};\n  --t-c-slope: ${theme.cSlope};\n  --t-l-base: ${theme.lBase}%;\n  --t-l-slope: ${theme.lSlope}%;\n  --t-on-main-l-base: ${theme.onMainLBase}%;\n  --t-on-main-l-slope: ${theme.onMainLSlope}%;\n}`;
}

function generateGroupCss(group: ThemeGroup): string {
  return group.themes.map(generateThemeCss).join('\n\n');
}

function copyThemeCss(theme: ThemeConfig): void {
  copyToClipboard(generateThemeCss(theme));
}

function copyGroupCss(group: ThemeGroup): void {
  copyToClipboard(generateGroupCss(group));
}

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY) || 'error';
  try {
    groups.value = JSON.parse(saved);
  } catch (error) {
    if (saved !== 'error') {
      console.warn('Failed to parse saved theme groups', error);
    }
    groups.value = JSON.parse(JSON.stringify(defaultGroups));
  }

  if (groups.value.length > 0) {
    selectedGroupId.value = groups.value[0].id;
  }

  isLoaded.value = true;
});

watch(selectedThemeId, (newId) => {
  if (newId && selectedTheme.value) {
    editingTheme.value = { ...selectedTheme.value };
  } else {
    editingTheme.value = null;
  }
});

watch(
  groups,
  (newGroups) => {
    if (isLoaded.value) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newGroups));
    }
  },
  { deep: true },
);
</script>
