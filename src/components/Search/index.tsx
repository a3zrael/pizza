import { useCallback, useContext, useRef, useState } from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../App/App';
import debounce from 'lodash.debounce';

export interface searchTypes {
    searchValue: string;
    setSearchValue: () => void;
}

export const Search = () => {
    const [valInput, setValInput] = useState('');
    const { searchValue, setSearchValue } = useContext(SearchContext);
    const inputRef = useRef();

    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = useCallback(
        debounce((value) => {
            setSearchValue(value);
        }, 300),
        []
    );

    const onChangeInput = (event) => {
        setValInput(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={styles.root_search}>
            <input
                ref={inputRef}
                className={styles.search}
                type="text"
                placeholder="Поиск..."
                onChange={onChangeInput}
                value={valInput}
            />

            {searchValue && (
                <div className={styles.cross} onClick={() => onClickClear()}>
                    x
                </div>
            )}
        </div>
    );
};
