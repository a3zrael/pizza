import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { PizzaCard } from './components/PizzaCard/PizzaCard';
import pizzas from './components/pizzas.json';
import './scss/App.scss';

export const App = () => {
    fetch('https://655cd02b25b76d9884fdfca4.mockapi.io/items').then(
        (res: Array) => {
            console.log(res);
        }
    );
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
                            {pizzas.map((element) => (
                                <PizzaCard key={undefined} {...element} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
