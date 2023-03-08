import MainScreen from '../../pages/main/main';

type AppScreenProps = {
  title: string;
  genre: string;
  release: number;
}

function App({
  title, genre, release
}: AppScreenProps): JSX.Element {
  return (<MainScreen title={title} genre={genre} release={release} />);
}

export default App;
