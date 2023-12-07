import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
export const Pagination = () => {
    return (
        <div>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => console.log(event)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};
