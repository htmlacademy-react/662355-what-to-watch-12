import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films } from './mock/film';
import { reviews } from './mock/review';
import { user } from './mock/user';
import { store } from './store';
import { changeFilms } from './store/action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(changeFilms({ films }));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={films} reviews={reviews} user={user} />
    </Provider>
  </React.StrictMode>,
);
