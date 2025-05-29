export function getWeekDates() {
  const today = new Date();
  const currentDay = today.getDay();
  const mondayOffset = currentDay === 0 ? -6 : 1 - currentDay;
  const monday = new Date(today);
  monday.setDate(today.getDate() + mondayOffset);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

export function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export function formatDisplayDate(date, time) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  let dateStr = date.toLocaleDateString(undefined, options);
  if (time) dateStr += ` - ${time}`;
  return dateStr;
}

export function formatTime(date) {
  let h = date.getHours();
  let m = date.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12;
  h = h ? h : 12;
  m = m < 10 ? '0' + m : m;
  return `${h}:${m}${ampm}`;
} 