
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
);

export default Main;