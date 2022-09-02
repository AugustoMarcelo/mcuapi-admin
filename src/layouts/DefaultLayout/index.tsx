import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';

export function DefaultLayout() {
  return (
    <div className="h-full grid grid-cols-sidebar">
      <Sidebar />
      <main className="flex flex-col">
        <Header />
        <div className="py-5 pl-5">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
