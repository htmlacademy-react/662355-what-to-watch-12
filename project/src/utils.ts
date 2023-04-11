
function formatDuration(minutes: number) {
  if (minutes < 60) {
    return `${minutes}m`;
  } else {
    const hours = Math.floor(minutes / 60);
    return `${hours}h ${minutes % 60}m`;
  }
}

function formatPlayerTime(duractionInSeconds: number): string {
  duractionInSeconds = Math.floor(duractionInSeconds);
  if (duractionInSeconds < 3600) {
    const minutes = Math.floor(duractionInSeconds / 60);
    const seconds = duractionInSeconds % 60;
    return `-${minutes}:${seconds}`;
  } else {
    const hours = Math.floor(duractionInSeconds / 3600);
    const minutes = Math.floor(duractionInSeconds % 3600 / 60);
    const seconds = duractionInSeconds % 60;
    return `-${hours}:${minutes}:${seconds}`;
  }
}

export { formatDuration, formatPlayerTime };

