import { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'
import axios from 'axios'
import { GlobalFilter } from './GlobalFilter';
import {
    Container,
    TableContainer,
    ButtonsContainer,
    Button,
} from "./styledTable";

export const Table = ({ title, url, data, cols }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${url ? url : ""}`);
            setPosts(res.data);
        };

        fetchPosts();
    }, []);

    const columns = useMemo(() => cols, []);
    const dataaa = useMemo(() => posts, [posts]);
    const devicesTableData = useMemo(() => data, [data]);
    const tableinstance = useTable({
        columns: columns,
        data: data ? devicesTableData : dataaa
    }, useGlobalFilter, useSortBy, usePagination);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        prepareRow,
        state,
        setGlobalFilter
    } = tableinstance;

    const { globalFilter, pageIndex } = state;

    return (
        <Container>
            <h4>{title}</h4>

            <GlobalFilter filter={globalFilter} setfilter={setGlobalFilter}></GlobalFilter>
            <TableContainer {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            <th>#</th>
                            {headerGroup.headers.map(column => (
                                // Add the sorting props to control sorting. For this example
                                // we can add them into the header props
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    {/* Add a sort direction indicator */}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                <td>{Number(row.id) + 1}</td>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </TableContainer>
            <ButtonsContainer>
                <span>
                    page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>

                <div>
                    <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>
                    <Button onClick={() => { previousPage() }} disabled={!canPreviousPage}>Previous</Button>
                    <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
                    <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</Button>
                </div>
            </ButtonsContainer>
        </Container>
    );
};