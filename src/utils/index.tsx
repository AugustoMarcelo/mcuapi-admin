export function formatTimeDuration(duration: number) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  return hours && minutes ? `${hours}h${minutes}m` : 'N/A';
}
