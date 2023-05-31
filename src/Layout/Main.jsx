
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import { Toaster } from 'react-hot-toast';

const Main = () => (
    <div>
        <Header />
        <Outlet />
        <Footer />
        <Toaster position="top-right"
  reverseOrder={false}/>
    </div>
);

export default Main;