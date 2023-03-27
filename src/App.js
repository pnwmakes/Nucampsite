import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Header />
            <Outlet/>
            <Footer />
            <ScrollRestoration/>
        </div>
    );
}

export default App;
