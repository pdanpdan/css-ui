export const modes = [
  'mode-light',
  'mode-dark',
];

export const sizes = [
  'size-xs',
  'size-sm',
  'size-md',
  'size-lg',
  'size-xl',
];

export const themes = [
  'theme-neutral',
  'theme-primary',
  'theme-secondary',
  'theme-accent',
  'theme-success',
  'theme-warning',
  'theme-error',
  'theme-info',
];

export const variants = {
  color: [
    'variant-filled',
    'variant-soft',
    'variant-outlined',
    'variant-ghost',
  ],
  density: [
    'variant-dense',
    'variant-lax',
  ],
  shape: [
    'variant-square',
  ],
  radius: [
    'variant-pill',
    'variant-sharp',
  ],
};

export type VariantTypes = keyof typeof variants;

export const surfaces = [
  'surface',
  'surface-lv-1',
  'surface-lv-2',
  'surface-lv-3',
];

export const states = [
  'state-hover',
  'state-active',
  'state-focus',
  'state-disabled',
];
