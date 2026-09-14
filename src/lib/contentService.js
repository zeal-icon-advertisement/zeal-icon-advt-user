import { photographs as localPhotographs } from '../data/placeholderContent'

export function getPhotographs() {
  return localPhotographs
}

export function getFeaturedPhotographs() {
  const featured = localPhotographs.filter((item) => item.featured)
  return featured.length ? featured : localPhotographs.slice(0, 3)
}

export function getPhotographBySlug(slug) {
  return localPhotographs.find((item) => item.slug === slug) ?? null
}

export async function getPhotographyContent() {
  return { photographs: getPhotographs() }
}

export async function getHomeContent() {
  return { photographs: getPhotographs() }
}
