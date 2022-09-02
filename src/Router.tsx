import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Movie } from './pages/Movie';
import { Movies } from './pages/Movies';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
