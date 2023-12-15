import { useContext, useRef } from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../App/App';

export interface searchTypes {
    searchValue: string;
    setSearchValue: () => void;
}

export const Search = () => {
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const inputRef = useRef();

    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <div className={styles.root_search}>
            <input
                ref={inputRef}
                className={styles.search}
                type="text"
                placeholder="Поиск..."
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
            />

            {searchValue && (
                <div className={styles.cross} onClick={() => onClickClear()}>
                    x
                </div>
            )}
        </div>
    );
};
