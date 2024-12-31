export function isPastEvent(dateString: string, timeString: string): boolean {
  const [year, month, day] = dateString.split('.').map(Number);
  const [hour, minute] = timeString.split(':').map(Number);
  const eventDate = new Date(year, month - 1, day, hour, minute);

  return eventDate.getTime() < Date.now();
}
