export function getYouTubeVideoId(videoUrl) {
  try {
    const url = new URL(videoUrl)
    const hostname = url.hostname.toLowerCase().replace(/^www\./, '')
    const segments = url.pathname.split('/').filter(Boolean)
    let videoId = null

    if (hostname === 'youtu.be') {
      videoId = segments[0]
    } else if (['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(hostname)) {
      videoId = url.pathname === '/watch' ? url.searchParams.get('v') : segments[1]
    }

    return videoId && /^[\w-]{11}$/.test(videoId) ? videoId : null
  } catch {
    return null
  }
}