import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import './scss/App.scss';
import { useState } from 'react';
import { MainContent } from './components/MainContent/MainContent';
import { NotFound } from './components/NotFound/NotFound';
import { Cart } from './components/Cart/Cart';

export const App = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <>
            <div className="wrapper">
                <Header
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <MainContent searchValue={searchValue} />
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
};
