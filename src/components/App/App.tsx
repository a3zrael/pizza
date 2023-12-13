import { Route, Routes } from 'react-router-dom';
import { Header } from '../Header/Header';
import { FC, createContext, useState } from 'react';
import { MainContent } from '../MainContent/MainContent';
import { NotFound } from '../NotFound/NotFound';
import { Cart } from '../Cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './../../redux/slices/filterSlice';
import '../../scss/../scss/App.scss';

export const SearchContext = createContext('');

export const App: FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div className="wrapper">
                <div>
                    <div>
                        <button
                            aria-label="Increment value"
                            onClick={() => dispatch(increment())}
                        >
                            Increment
                        </button>
                        <span>{count}</span>
                        <button
                            aria-label="Decrement value"
                            onClick={() => dispatch(decrement())}
                        >
                            Decrement
                        </button>
                    </div>
                </div>
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
