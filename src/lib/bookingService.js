const STORAGE_KEY = 'zealicon-shoot-bookings'

function pad(n) {
  return String(n).padStart(2, '0')
}

export function toDateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export function formatDisplayDate(dateKey) {
  const [y, m, d] = dateKey.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

/** Mock blocked slots (studio already busy) */
const BLOCKED = new Set([
  // weekends lightly blocked for demo variety — computed dynamically below
])

function getSeedBlocked(dateKey, slotId) {
  // Deterministic “busy” pattern so availability feels real without a backend
  const day = Number(dateKey.slice(-2))
  if (day % 7 === 0 && slotId === '10:00') return true
  if (day % 5 === 0 && slotId === '13:00') return true
  if (day % 3 === 0 && slotId === '16:00') return true
  return BLOCKED.has(`${dateKey}|${slotId}`)
}

export function getBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveBookings(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

export function getAvailableDays(count = 14) {
  const days = []
  const start = new Date()
  start.setHours(0, 0, 0, 0)
  // Start from tomorrow
  start.setDate(start.getDate() + 1)

  for (let i = 0; i < count; i += 1) {
    const d = new Date(start)
    d.setDate(start.getDate() + i)
    // Skip Sundays for photography shoots
    if (d.getDay() === 0) continue
    days.push({
      key: toDateKey(d),
      label: formatDisplayDate(toDateKey(d)),
      weekday: d.toLocaleDateString('en-IN', { weekday: 'short' }),
      day: d.getDate(),
      month: d.toLocaleDateString('en-IN', { month: 'short' }),
    })
  }
  return days
}

export function getSlotStatus(dateKey, slotId) {
  const bookings = getBookings()
  const taken = bookings.some((b) => b.date === dateKey && b.slot === slotId)
  if (taken || getSeedBlocked(dateKey, slotId)) return 'unavailable'
  return 'available'
}

export function bookShoot(payload) {
  const { date, slot, service, name, phone, email, note } = payload
  if (!date || !slot || !service || !name || !phone) {
    throw new Error('Please fill all required fields.')
  }
  if (getSlotStatus(date, slot) !== 'available') {
    throw new Error('This slot is no longer available. Please choose another.')
  }

  const booking = {
    id: `bk-${Date.now()}`,
    date,
    slot,
    service,
    name: name.trim(),
    phone: phone.trim(),
    email: (email || '').trim(),
    note: (note || '').trim(),
    createdAt: new Date().toISOString(),
  }

  const next = [...getBookings(), booking]
  saveBookings(next)
  return booking
}
