import { Outlet } from 'react-router-dom';
import './styles/navbar.css';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="navbar-link">
            <a href="/">Home</a>
          </div>
          <div className="navbar-link">
            <a href="/test">Test</a>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
