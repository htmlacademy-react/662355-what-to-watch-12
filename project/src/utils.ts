
enum TypeOfTab {
  OVERVIEW, REVIEWS, DETAILS
}

function fotmatDuration(minutes: number) {
  if (minutes < 60) {
    return `${minutes}m`;
  } else {
    const hours = Math.floor(minutes / 60);

    return `${hours}h ${minutes % 60}m`;
  }
}

export { fotmatDuration, TypeOfTab };

