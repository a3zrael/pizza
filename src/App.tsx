import { Header } from './components/Header/Header';
// import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './scss/App.scss';

export const App = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        {/* <Home /> */}
                        <NotFound />
                    </div>
                </div>
            </div>
        </>
    );
};
