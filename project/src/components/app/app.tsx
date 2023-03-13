import MainScreen from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInScreen from '../../pages/sing-in/sign-in';
import MyListScreen from '../../pages/my-list/my-list';
import FilmScreen from '../../pages/film/film';
import AddRewiewScreen from '../../pages/add-rewiew/add-rewiew';
import PlayerScreen from '../../pages/player/pleyer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route';
import { Films } from '../../types/film';
import { Reviews } from '../../types/review';
import { User } from '../../types/user';

type AppScreenProps = {
  films: Films;
  reviews: Reviews;
  user: User;
}

function App({
  films, reviews, user
}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< MainScreen films={films} user={user} />} />
        <Route path='/login' element={<SignInScreen />} />
        <Route path='/mylist' element={
          <PrivateRoute hasAccess>
            <MyListScreen films={films} user={user} />
          </PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<FilmScreen films={films} user={user} />} />
        <Route path='/films/:id/review' element={<AddRewiewScreen films={films} user={user} />} />
        <Route path='/player/:id' element={<PlayerScreen films={films} />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
