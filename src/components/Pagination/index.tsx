import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

interface PaginationProps {
    onChangePage: (numPage: number) => void;
}

export const Pagination = ({ onChangePage }: PaginationProps) => {
    onChangePage;
    return (
        <div>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};
