import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { FC, createContext, useState } from 'react';
import { MainContent } from '../MainContent/MainContent';
import { NotFound } from '../NotFound/NotFound';
import { Cart } from '../Cart/Cart';
import '../../scss/../scss/App.scss';

export const SearchContext = createContext('');

export const App: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');

    return (
        <>
            <div className="wrapper">
                <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                    {' '}
                    <Header />
                    <div className="content">
                        <div className="container">
                            <Routes>
                                <Route path="/" element={<MainContent />} />
                                <Route path="*" element={<NotFound />} />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </div>
                    </div>
                </SearchContext.Provider>
            </div>
        </>
    );
};
