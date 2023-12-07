import { searchTypes } from '../Header/Header';
import styles from './Search.module.scss';

export const Search = ({ searchValue, setSearchValue }: searchTypes) => {
    searchValue;
    return (
        <div className={styles.root_search}>
            <input
                className={styles.search}
                type="text"
                placeholder="Поиск..."
                onChange={(event) => setSearchValue(event.target.value)}
                value={searchValue}
            />

            {searchValue && (
                <div
                    className={styles.cross}
                    onClick={() => setSearchValue('')}
                >
                    x
                </div>
            )}
        </div>
    );
};
