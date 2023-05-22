
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => (
    <div>
        <Header />
        <div className='w-11/12 mx-auto'>
        
            <Outlet />
            </div>
        <Footer />
    </div>
);

export default Main;