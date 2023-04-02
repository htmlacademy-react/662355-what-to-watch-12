import MainScreen from '../../pages/main/main';
import { Route, Routes } from 'react-router-dom';
import SignInScreen from '../../pages/sing-in/sign-in';
import MyListScreen from '../../pages/my-list/my-list';
import AddRewiewScreen from '../../pages/add-rewiew/add-rewiew';
import PlayerScreen from '../../pages/player/pleyer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route';
import FilmScreen from '../../pages/film-layout/film';
import Overview from '../overview.tsx/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { HelmetProvider } from 'react-helmet-async';
import { getFilms } from '../../store/app-process/selectors';
import { getAuthCheckedStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {
  const films = useAppSelector(getFilms);
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);

  if (films.length === 0 && isAuthChecked) {
    return <Loading />;
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path='/' element={<MainScreen />} />
          <Route path='/login' element={<SignInScreen />} />
          <Route path='/mylist' element={
            <PrivateRoute>
              <MyListScreen films={films} />
            </PrivateRoute>
          }
          />
          <Route path='/films/:id/review' element={<AddRewiewScreen />} />
          <Route path='/films/:id' element={<FilmScreen />} >
            <Route index element={<Overview />} />
            <Route path='details' element={<Details />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>

          <Route path='/player/:id' element={<PlayerScreen films={films} />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );

}
export default App;
