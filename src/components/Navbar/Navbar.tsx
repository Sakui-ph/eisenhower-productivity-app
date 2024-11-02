import { Outlet } from 'react-router-dom';
import './styles/navbar.css';

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <nav>
          <a href="/">Home</a>
          <a href="/test">Test</a>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
