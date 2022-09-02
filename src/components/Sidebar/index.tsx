import {
  Detective,
  FilmStrip,
  House,
  MaskHappy,
  PaperPlaneRight,
  Television,
} from 'phosphor-react';
import Logo from '../../logo.svg';
import { NavLinkComponent } from './components/NavLink';

export function Sidebar() {
  return (
    <aside className="flex flex-col h-full items-center bg-gray-850">
      <img src={Logo} alt="" className="w-24 h-24 mt-10 mb-16" />

      <nav className="w-full">
        <ul>
          <li>
            <NavLinkComponent to="/" title="Home" icon={House} />
          </li>
          <li>
            <NavLinkComponent to="/movies" title="Movies" icon={FilmStrip} />
          </li>
          <li>
            <NavLinkComponent
              to="/tvshows"
              title="TV Shows"
              icon={Television}
            />
          </li>
          <li>
            <NavLinkComponent
              to="/characters"
              title="Characters"
              icon={MaskHappy}
            />
          </li>
          <li>
            <NavLinkComponent
              to="/my-sents"
              title="My Sents"
              icon={PaperPlaneRight}
            />
          </li>
          <li>
            <NavLinkComponent to="/admin" title="Admin" icon={Detective} />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
