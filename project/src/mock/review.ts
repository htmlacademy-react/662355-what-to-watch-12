import { Review } from '../types/review';

export const reviews: Review[] =
  [
    {
      'comment': 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director\'s funniest and most exquisitely designed movies in years.',
      'date': new Date(),
      'id': 1,
      'rating': 8.9,
      'user': {
        'id': 4,
        'name': 'Kate Muir'
      }
    },
    {
      'comment': 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
      'date': new Date(),
      'id': 2,
      'rating': 7.9,
      'user': {
        'id': 5,
        'name': 'Sara Muir'
      }
    },
    {
      'comment': 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe',
      'date': new Date(),
      'id': 3,
      'rating': 6.9,
      'user': {
        'id': 6,
        'name': 'Andey Muir'
      }
    },
    {
      'comment': 'I didn\'t find it amusing, and while I can appreciate the creativity, it\'s an hour and 40 minutes I wish I could take back.',
      'date': new Date(),
      'id': 1,
      'rating': 5.9,
      'user': {
        'id': 7,
        'name': 'Clair Muir'
      }
    }];

