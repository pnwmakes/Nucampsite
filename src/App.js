import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { fetchComments, fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import './App.css';



function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
    }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Outlet />
            <Footer />
            <ScrollRestoration />
        </div>
    );
}

export default App;
