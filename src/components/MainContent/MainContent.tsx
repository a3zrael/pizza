import { Categories } from '../Categories/Categories';
import { Sort } from '../Sort/Sort';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import Skeleton from '../PizzaCard/Skeleton';
import { useEffect, useState } from 'react';

export const MainContent = () => {
    const [pizzaItems, setPizzaItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://655cd02b25b76d9884fdfca4.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((arr: []) => {
                setPizzaItems(arr);
                setIsLoading(false);
            });
    }, []);
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(7)].map((index) => <Skeleton key={index} />)
                    : pizzaItems.map((element, index) => (
                          <PizzaCard key={index} {...element} />
                      ))}
            </div>
        </>
    );
};
