export function convertRating(rating: number): string {
  if (rating <= 3) {
    return 'Bad';
  }
  else if (rating <= 5) {
    return 'Normal';
  }
  else if (rating <= 8) {
    return 'Good';
  }
  else if (rating < 10) {
    return 'Very Good';
  }
  else {
    return 'Awesome';
  }
}
