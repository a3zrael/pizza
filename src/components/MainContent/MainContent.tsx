import { Categories } from '../Categories/Categories';
import { Sort, sortList } from '../Sort/Sort';
import { PizzaCard } from '../PizzaCard/PizzaCard';
import Skeleton from '../PizzaCard/Skeleton';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import { Pagination } from '../Pagination';
import { SearchContext } from '../App/App';
import { useSelector, useDispatch } from 'react-redux';
import {
    setCategoryId,
    setPageCount,
    setFilters,
} from '../../redux/slices/filter';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';
// import { current } from '@reduxjs/toolkit';

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const { categoryId, sort, pageCount } = useSelector(
        (state) => state.filter
    );

    const sortType = sort.sortProperty;
    const { searchValue } = useContext(SearchContext);
    const [pizzaItems, setPizzaItems] = useState<PizzaItems[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const setCategorieId = (id) => {
        dispatch(setCategoryId(id));
    };

    const onChangePage = (number) => {
        dispatch(setPageCount(number));
    };

    const fetchPizzas = () => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios
            .get(
                `https://655cd02b25b76d9884fdfca4.mockapi.io/items?page=${pageCount}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
            )
            .then((response) => {
                setPizzaItems(response.data);
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                pageCount,
            });
            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, pageCount, sort.sortProperty]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = sortList.find(
                (obj) => obj.sortProperty === params.sortProperty
            );

            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            isSearch.current = true;
        }
    }, []);

    useEffect(() => {
        if (!isSearch.current) {
            fetchPizzas();
        }
        isSearch.current = false;
    }, [categoryId, pageCount, sort.sortProperty, searchValue]);

    const pizzas = pizzaItems.map((element, index) => (
        <PizzaCard key={index} {...element} />
    ));

    const skeletons = [...new Array(7)].map((index) => (
        <Skeleton key={index} />
    ));

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
            <Pagination pageCount={pageCount} onChangePage={onChangePage} />
        </>
    );
};
