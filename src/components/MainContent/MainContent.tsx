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
    const inMounted = useRef(false);

    const { categoryId, sort, pageCount } = useSelector(
        (state) => state.filter
    );

    const sortType = sort.sortProperty;
    const { searchValue } = useContext(SearchContext);
    const [pizzaItems, setPizzaItems] = useState<PizzaItems[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

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
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            console.log(params);
            const sort = sortList.find(
                (obj) => obj.sortProperty === params.sortProperty
            );
            dispatch(setFilters({ ...params, sort }));
            isSearch.current = true;
        }
    });

    useEffect(() => {
        // window.scroll(0, 0);
        if (!isSearch.current) {
            fetchPizzas();
        }
        isSearch.current = false;
    }, [categoryId, sortType, searchValue, pageCount]);

    useEffect(() => {
        if (inMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryId,
                pageCount,
            });

            navigate(`?${queryString}`);
        }
        inMounted.current = true;
    }, [categoryId, sortType, searchValue, pageCount]);

    const pizzas = pizzaItems.map((element, index) => (
        <PizzaCard key={index} {...element} />
    ));

    const skeletons = [...new Array(7)].map((index) => (
        <Skeleton key={index} />
    ));

    const setCategorieId = (id) => {
        dispatch(setCategoryId(id));
    };

    const onChangePage = (number) => {
        dispatch(setPageCount(number));
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
            <Pagination pageCount={pageCount} onChangePage={onChangePage} />
        </>
    );
};
