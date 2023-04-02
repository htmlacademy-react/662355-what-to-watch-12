
export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
}

export type Reviews = Review[];

export type ReviewData = {
  filmId: number;
  review: {
    rating: number;
    comment: string;
  };
}
