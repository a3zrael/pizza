import { Header } from './components/Header/Header';
import { Categories } from './components/Categories/Categories';
import { Sort } from './components/Sort/Sort';
import { PizzaCard } from './components/PizzaCard/PizzaCard';
import Skeleton from './components/PizzaCard/Skeleton';
// import pizzas from './components/pizzas.json';
import './scss/App.scss';
import { useEffect, useState } from 'react';

export const App = () => {
    PizzaCard;
    Skeleton;
    const [pizzaItems, setPizzaItems] = useState([]);
    useEffect(() => {
        fetch('https://655cd02b25b76d9884fdfca4.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((arr: []) => {
                setPizzaItems(arr);
            });
    }, []);

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
                            {pizzaItems.map((element, index) => (
                                <PizzaCard
                                    key={index}
                                    {...element}
                                    className="skeleton"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
