<template>
  <article class="space-y-8">
    <h2>Theme Configurator</h2>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
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
                class="btn z-1 theme-error variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                aria-label="Remove group"
                @click="removeGroup(group.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
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
              class="btn ms-auto variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
              aria-label="Copy group CSS"
              @click="copyGroupCss(selectedGroup)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>

            <button
              type="button"
              class="btn ms-2 theme-success variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
              aria-label="Add new theme"
              @click="addTheme"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>

              <button
                type="button"
                class="btn z-1 theme-error variant-style-ghost variant-aspect-square size-sm variant-shape-pill"
                aria-label="Delete theme"
                @click="removeTheme(theme.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
              </button>
            </li>
          </ul>
        </section>
      </div>

      <div v-if="selectedGroup" class="flex shrink-0 flex-col gap-8 xl:w-2/3">
        <section v-if="editingTheme" class="card">
          <div class="card-title flex flex-wrap items-center pb-2">
            Edit Theme:
            <input type="text" v-model="editingTheme.name" class="form-input" />
            <button type="button" class="btn ms-auto theme-primary variant-style-filled size-sm" @click="saveTheme">
              Save Changes
            </button>
          </div>

          <div class="form-layout grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="form-group space-y-2">
              <div class="form-label">Hue Base & Slope</div>
              <p class="form-help">
                Defines the color family (0-360). Slope adjusts the hue when switching to dark mode.
              </p>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Base:</span>
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  v-model.number="editingTheme.hBase"
                  class="form-range flex-1"
                />
                <input
                  type="number"
                  min="0"
                  max="360"
                  v-model.number="editingTheme.hBase"
                  class="form-input w-16 text-end"
                />
              </div>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Slope:</span>
                <input
                  type="range"
                  min="-360"
                  max="360"
                  step="1"
                  v-model.number="editingTheme.hSlope"
                  class="form-range flex-1"
                />
                <input
                  type="number"
                  min="-360"
                  max="360"
                  v-model.number="editingTheme.hSlope"
                  class="form-input w-16 text-end"
                />
              </div>
            </div>

            <div class="form-group space-y-2">
              <div class="form-label">Chroma Base & Slope</div>
              <p class="form-help">Defines the color intensity/vibrancy (0.00 - 0.40). Lower values are greyer.</p>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Base:</span>
                <input
                  type="range"
                  min="0"
                  max="0.4"
                  step="0.01"
                  v-model.number="editingTheme.cBase"
                  class="form-range flex-1"
                />
                <input
                  type="number"
                  min="0"
                  max="0.4"
                  step="0.01"
                  v-model.number="editingTheme.cBase"
                  class="form-input w-16 text-end"
                />
              </div>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Slope:</span>
                <input
                  type="range"
                  min="-0.4"
                  max="0.4"
                  step="0.01"
                  v-model.number="editingTheme.cSlope"
                  class="form-range flex-1"
                />
                <input
                  type="number"
                  min="-0.4"
                  max="0.4"
                  step="0.01"
                  v-model.number="editingTheme.cSlope"
                  class="form-input w-16 text-end"
                />
              </div>
            </div>

            <div class="form-group space-y-2">
              <div class="form-label">Lightness Base & Slope (%)</div>
              <p class="form-help">Defines how bright the background is (0 - 100). Higher is brighter.</p>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Base:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  v-model.number="editingTheme.lBase"
                  class="form-range flex-1"
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  v-model.number="editingTheme.lBase"
                  class="form-input w-16 text-end"
                />
              </div>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Slope:</span>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  step="1"
                  v-model.number="editingTheme.lSlope"
                  class="form-range flex-1"
                />
                <input
                  type="number"
                  min="-100"
                  max="100"
                  v-model.number="editingTheme.lSlope"
                  class="form-input w-16 text-end"
                />
              </div>
            </div>

            <div class="form-group space-y-2">
              <div class="form-label">Foreground Lightness (%)</div>
              <p class="form-help">
                Forces text to be light (e.g. 99) or dark (e.g. 10) on filled buttons to ensure contrast.
              </p>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Base:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  v-model.number="editingTheme.onMainLBase"
                  class="form-range flex-1"
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  v-model.number="editingTheme.onMainLBase"
                  class="form-input w-16 text-end"
                />
              </div>
              <div class="flex items-center gap-4">
                <span class="w-12 text-sm">Slope:</span>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  step="1"
                  v-model.number="editingTheme.onMainLSlope"
                  class="form-range flex-1"
                />
                <input
                  type="number"
                  min="-100"
                  max="100"
                  v-model.number="editingTheme.onMainLSlope"
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
import { modes, states, variants } from '/settings';
import { computed, onMounted, ref, watch } from 'vue';

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
        name: 'Neutral',
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
        name: 'Primary',
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
        name: 'Secondary',
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
        name: 'Accent',
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
        name: 'Success',
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
        name: 'Warning',
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
        name: 'Error',
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
        name: 'Info',
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

function saveTheme(): void {
  if (selectedTheme.value && editingTheme.value) {
    Object.assign(selectedTheme.value, editingTheme.value);
  }
}

async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.warn('Failed to copy to clipboard', error);
  }
}

function sanitizeThemeName(name: string): string {
  const sanitized = name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-_]/g, '');
  return sanitized.startsWith('theme-') ? sanitized : `theme-${sanitized}`;
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
