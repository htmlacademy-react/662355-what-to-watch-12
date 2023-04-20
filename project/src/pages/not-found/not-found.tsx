import { Link } from 'react-router-dom';

export default function NotFoundScreen() {

  return (
    <section className="page-content">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>);
}
