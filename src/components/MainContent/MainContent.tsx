import { Categories } from '../Categories/Categories';
import { Sort } from '../Sort/Sort';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import Skeleton from '../PizzaCard/Skeleton';
import { FC, useContext, useEffect, useState } from 'react';
import { Pagination } from '../Pagination';
import { SearchContext } from '../App/App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../../redux/slices/filter';
import axios from 'axios';

interface PizzaItems {
    id: number;
    imageUrl: string;
    price: number;
    rating: number;
    sizes: number[];
    title: string;
    types: number[];
}

export const MainContent: FC = () => {
    const dispatch = useDispatch();
    const { categoryId, sort } = useSelector((state) => state.filter);
    const sortType = sort.sortProperty;
    const { searchValue } = useContext(SearchContext);
    const [pizzaItems, setPizzaItems] = useState<PizzaItems[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios
            .get(
                `https://655cd02b25b76d9884fdfca4.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
            )
            .then((response) => {
                setPizzaItems(response.data);
                setIsLoading(false);
            });

        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    const pizzas = pizzaItems.map((element, index) => (
        <PizzaCard key={index} {...element} />
    ));

    const skeletons = [...new Array(7)].map((index) => (
        <Skeleton key={index} />
    ));

    const setCategorieId = (id) => {
        dispatch(setCategoryId(id));
    };

    return (
        <>
            <div className="content__top">
                <Categories
                    value={categoryId}
                    onChangeCategory={setCategorieId}
                />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination
                onChangePage={(numberPage: number) => {
                    setCurrentPage(numberPage);
                }}
            />
        </>
    );
};
