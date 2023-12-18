import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

interface PaginationProps {
    onChangePage: (numPage: number) => void;
    pageCount: number;
}

export const Pagination = ({ onChangePage, pageCount }: PaginationProps) => {
    onChangePage;
    return (
        <div>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={8}
                pageCount={3}
                forcePage={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};
