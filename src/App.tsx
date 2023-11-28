import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
// import { NotFoundPage } from './pages/NotFoundPage';
import { MainContentPage } from './pages/MainContentPage';
// import { CartPage } from './pages/CartPage';
import './scss/App.scss';

export const App = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<MainContentPage />} />
                            {/* <MainContentPage /> */}
                            {/* <CartPage /> */}
                            {/* <NotFoundPage /> */}
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};
