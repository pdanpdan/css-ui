export const modes = ['mode-light', 'mode-dark'];

export const sizes = ['size-xs', 'size-sm', 'size-md', 'size-lg', 'size-xl', 'size-2xl'];

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
  aspect: ['variant-aspect-default', 'variant-aspect-square'],
  density: ['variant-density-default', 'variant-density-dense', 'variant-density-lax'],
  depth: ['variant-depth-0', 'variant-depth-1'],
  shape: ['variant-shape-default', 'variant-shape-pill', 'variant-shape-sharp'],
  style: ['variant-style-filled', 'variant-style-soft', 'variant-style-outlined', 'variant-style-ghost'],
};

export type VariantTypes = keyof typeof variants;

export const surfaces = ['surface', 'surface-lv-1', 'surface-lv-2', 'surface-lv-3'];

export const states = ['state-hover', 'state-active', 'state-focus', 'state-disabled'];

export const demoSelectors = [
  `group-has-[[value='size-xs']:checked]:size-xs`,
  `group-has-[[value='size-sm']:checked]:size-sm`,
  `group-has-[[value='size-md']:checked]:size-md`,
  `group-has-[[value='size-lg']:checked]:size-lg`,
  `group-has-[[value='size-xl']:checked]:size-xl`,
  `group-has-[[value='size-2xl']:checked]:size-2xl`,

  `group-has-[[value='theme-neutral']:checked]:theme-neutral`,
  `group-has-[[value='theme-primary']:checked]:theme-primary`,
  `group-has-[[value='theme-secondary']:checked]:theme-secondary`,
  `group-has-[[value='theme-accent']:checked]:theme-accent`,
  `group-has-[[value='theme-success']:checked]:theme-success`,
  `group-has-[[value='theme-warning']:checked]:theme-warning`,
  `group-has-[[value='theme-error']:checked]:theme-error`,
  `group-has-[[value='theme-info']:checked]:theme-info`,

  `group-has-[[value='variant-style-filled']:checked]:variant-style-filled`,
  `group-has-[[value='variant-style-soft']:checked]:variant-style-soft`,
  `group-has-[[value='variant-style-outlined']:checked]:variant-style-outlined`,
  `group-has-[[value='variant-style-ghost']:checked]:variant-style-ghost`,

  `group-has-[[value='variant-density-default']:checked]:variant-density-default`,
  `group-has-[[value='variant-density-dense']:checked]:variant-density-dense`,
  `group-has-[[value='variant-density-lax']:checked]:variant-density-lax`,

  `group-has-[[value='variant-shape-default']:checked]:variant-shape-default`,
  `group-has-[[value='variant-shape-pill']:checked]:variant-shape-pill`,
  `group-has-[[value='variant-shape-sharp']:checked]:variant-shape-sharp`,

  `group-has-[[value='variant-aspect-default']:checked]:variant-aspect-default`,
  `group-has-[[value='variant-aspect-square']:checked]:variant-aspect-square`,

  `group-has-[[value='variant-depth-0']:checked]:variant-depth-0`,
  `group-has-[[value='variant-depth-1']:checked]:variant-depth-1`,
];
