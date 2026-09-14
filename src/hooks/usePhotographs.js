import { useMemo } from 'react'
import { getFeaturedPhotographs, getPhotographBySlug, getPhotographs } from '../lib/contentService'

export function usePhotographs() {
  return useMemo(() => getPhotographs(), [])
}

export function useFeaturedPhotographs() {
  return useMemo(() => getFeaturedPhotographs(), [])
}

export function usePhotograph(slug) {
  return useMemo(() => getPhotographBySlug(slug), [slug])
}
