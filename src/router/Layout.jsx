import { Outlet } from 'react-router-dom';
import Footer from '../components/common/layout/Footer';
import NavBar from '../components/common/layout/NavBar';

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
