import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { PizzaCard } from './components/PizzaCard/PizzaCard';
import './scss/App.scss';

export const App = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            <PizzaCard title="Мексиканская" price={396} />
                            <PizzaCard />
                            <PizzaCard />
                            <PizzaCard />
                            <PizzaCard />
                            <PizzaCard />
                            <PizzaCard />
                            <PizzaCard />
                            <PizzaCard />
                            <PizzaCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
