import MainScreen from '../../pages/main/main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInScreen from '../../pages/sing-in/sign-in';
import MyListScreen from '../../pages/my-list/my-list';
import FilmScreen from '../../pages/film/film';
import AddRewiewScreen from '../../pages/add-rewiew/add-rewiew';
import PlayerScreen from '../../pages/player/pleyer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route';

type AppScreenProps = {
  title: string;
  genre: string;
  release: number;
}

function App({
  title, genre, release
}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< MainScreen title={title} genre={genre} release={release} />} />
        <Route path='/login' element={<SignInScreen />} />
        <Route path='/mylist' element={
          <PrivateRoute>
            <MyListScreen />
          </PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<FilmScreen />} />
        <Route path='/films/:id/review' element={<AddRewiewScreen />} />
        <Route path='/player/:id' element={<PlayerScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );

}
export default App;
