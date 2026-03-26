// oxlint-disable-next-line prefer-destructuring
const BASE_URL = import.meta.env.BASE_URL;

const reMatchHref = /[^#\w\s-]/;

export function normalizeHref(href: string, addBase = true): string {
  const url = addBase && !href.startsWith(BASE_URL) ? `${BASE_URL}/${href}` : href;
  const split = url.split('/').filter((part) => part.length > 0);
  return `/${split.join('/')}${split.at(-1)?.includes('.') ? '' : '/'}`;
}

export function matchHref(href: string, urlPathname: string): boolean {
  const normalizedHref = normalizeHref(href, false);
  return (
    urlPathname === href ||
    urlPathname === normalizedHref ||
    (normalizedHref !== '/' &&
      typeof urlPathname === 'string' &&
      urlPathname.startsWith(normalizedHref) &&
      reMatchHref.test(urlPathname[normalizedHref.length]))
  );
}

export function extractUrlPathname(href: string): string {
  return normalizeHref(href.startsWith(BASE_URL) ? href.slice(BASE_URL.length) : href, false);
}
