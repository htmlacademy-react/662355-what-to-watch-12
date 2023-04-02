import MainScreen from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInScreen from '../../pages/sing-in/sign-in';
import MyListScreen from '../../pages/my-list/my-list';
import AddRewiewScreen from '../../pages/add-rewiew/add-rewiew';
import PlayerScreen from '../../pages/player/pleyer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route';
import { Reviews as ReviewsType } from '../../types/review';
import { User } from '../../types/user';
import FilmScreen from '../../pages/film-layout/film';
import Overview from '../overview.tsx/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import { useAppSelector } from '../../hooks';

type AppScreenProps = {
  reviews: ReviewsType;
  user: User;
}

function App({ reviews, user }: AppScreenProps): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen user={user} />} />
        <Route path='/login' element={<SignInScreen />} />
        <Route path='/mylist' element={
          <PrivateRoute hasAccess>
            <MyListScreen films={films} user={user} />
          </PrivateRoute>
        }
        />
        <Route path='/films/:id/review' element={<AddRewiewScreen films={films} user={user} />} />
        <Route path='/films/:id' element={<FilmScreen films={films} user={user} />} >
          <Route index element={<Overview films={films} />} />
          <Route path='details' element={<Details films={films} />} />
          <Route path='reviews' element={<Reviews reviews={reviews} />} />
        </Route>

        <Route path='/player/:id' element={<PlayerScreen films={films} />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
