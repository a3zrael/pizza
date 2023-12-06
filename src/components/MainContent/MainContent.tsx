import { Categories } from '../Categories/Categories';
import { Sort } from '../Sort/Sort';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import Skeleton from '../PizzaCard/Skeleton';
import { useEffect, useState } from 'react';

interface PizzaItems {
    id: number;
    imageUrl: string;
    price: number;
    rating: number;
    sizes: number[];
    title: string;
    types: number[];
}

export interface sortTypes {
    name: string;
    sortProperty: string;
}

export const MainContent = () => {
    const [pizzaItems, setPizzaItems] = useState<PizzaItems[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [categoryId, setCategorieId] = useState<number>(0);
    const [sortType, setSortType] = useState<sortTypes>({
        name: 'полулярности',
        sortProperty: 'rating',
    });
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://655cd02b25b76d9884fdfca4.mockapi.io/items?category=' +
                categoryId
        )
            .then((res) => res.json())
            .then((arr: []) => {
                setPizzaItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryId]);
    console.log(categoryId, sortType);
    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategory={(i: number) => setCategorieId(i)}
                />
                <Sort
                    value={sortType}
                    onChangeSort={(index: sortTypes) => setSortType(index)}
                />
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
