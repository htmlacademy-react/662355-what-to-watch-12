import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { reviews } from './mock/review';
import { user } from './mock/user';
import { store } from './store';
import { fetchFilms } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilms());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} user={user} />
    </Provider>
  </React.StrictMode>,
);
