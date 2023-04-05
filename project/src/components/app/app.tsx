import MainScreen from '../../pages/main/main';
import { Route, Routes } from 'react-router-dom';
import SignInScreen from '../../pages/sing-in/sign-in';
import MyListScreen from '../../pages/my-list/my-list';
import AddRewiewScreen from '../../pages/add-rewiew/add-rewiew';
import PlayerScreen from '../../pages/player/pleyer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route';
import { Reviews as ReviewsType } from '../../types/review';
import FilmScreen from '../../pages/film-layout/film';
import Overview from '../overview.tsx/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import { useAppSelector } from '../../hooks';
import Loading from '../../pages/loading/loading';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { HelmetProvider } from 'react-helmet-async';
import { AuthorizationStatus } from '../../const';

type AppScreenProps = {
  reviews: ReviewsType;
}

function App({ reviews }: AppScreenProps): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const isLoading = useAppSelector((state) => state.isLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (isLoading && films.length === 0 && authorizationStatus === AuthorizationStatus.NO_AUTH) {
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
          <Route path='/films/:id/review' element={<AddRewiewScreen films={films} />} />
          <Route path='/films/:id' element={<FilmScreen films={films} />} >
            <Route index element={<Overview films={films} />} />
            <Route path='details' element={<Details films={films} />} />
            <Route path='reviews' element={<Reviews reviews={reviews} />} />
          </Route>

          <Route path='/player/:id' element={<PlayerScreen films={films} />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );

}
export default App;
