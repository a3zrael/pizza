import { Categories } from '../components/Categories/Categories';
import { Sort } from '../components/Sort/Sort';
import { PizzaCard } from '../components/PizzaCard/PizzaCard';
import Skeleton from '../components/PizzaCard/Skeleton';
import { useEffect, useState } from 'react';

export const Home = () => {
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
                {/* //TODO сделать скелетон нормальным по размеру */}
                {isLoading
                    ? [...new Array(7)].map((index) => <Skeleton key={index} />)
                    : pizzaItems.map((element, index) => (
                          <PizzaCard key={index} {...element} />
                      ))}
            </div>
        </>
    );
};
