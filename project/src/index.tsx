import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mock/film';
import { reviews } from './mock/review';
import { user } from './mock/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <App films={films} reviews={reviews} user={user} />
  </React.StrictMode>,
);
