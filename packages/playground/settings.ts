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

export const demoSelectors = [
  `group-has-[[value='size-xs']:checked]:size-xs`,
  `group-has-[[value='size-sm']:checked]:size-sm`,
  `group-has-[[value='size-md']:checked]:size-md`,
  `group-has-[[value='size-lg']:checked]:size-lg`,
  `group-has-[[value='size-xl']:checked]:size-xl`,


  `group-has-[[value='theme-neutral']:checked]:theme-neutral`,
  `group-has-[[value='theme-primary']:checked]:theme-primary`,
  `group-has-[[value='theme-secondary']:checked]:theme-secondary`,
  `group-has-[[value='theme-accent']:checked]:theme-accent`,
  `group-has-[[value='theme-success']:checked]:theme-success`,
  `group-has-[[value='theme-warning']:checked]:theme-warning`,
  `group-has-[[value='theme-error']:checked]:theme-error`,
  `group-has-[[value='theme-info']:checked]:theme-info`,


  `group-has-[[value='variant-filled']:checked]:variant-filled`,
  `group-has-[[value='variant-soft']:checked]:variant-soft`,
  `group-has-[[value='variant-outlined']:checked]:variant-outlined`,
  `group-has-[[value='variant-ghost']:checked]:variant-ghost`,


  `group-has-[[value='variant-dense']:checked]:variant-dense`,
  `group-has-[[value='variant-lax']:checked]:variant-lax`,


  `group-has-[[value='variant-pill']:checked]:variant-pill`,
  `group-has-[[value='variant-sharp']:checked]:variant-sharp`,


  `group-has-[[value='variant-square']:checked]:variant-square`,
];
