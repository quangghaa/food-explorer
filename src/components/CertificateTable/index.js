import React from "react";
import { useTable, usePagination } from 'react-table';
import { useQuery } from 'react-query';
import { getListContentType } from '../../hooks/useContentType';
import { EyeFilled, QuestionCircleOutlined } from '@ant-design/icons';
import { formatTime, vndConverter } from '../../utils/Utils';
import { useContentTypeGetTotal } from '../../hooks/useContentType';
import { useNavigate, Link } from 'react-router-dom';

const columns = [
    {
        Header: '',
        accessor: 'id',
        Cell: ({ cell: { value } }) => (
            <><span className="eye"><EyeFilled /></span></>
        )
    },
    {
        Header: 'Business ID',
        accessor: 'BusinessId',
        Cell: ({ cell: { value } }) => (
            <>
                <div className="wrap-long-text">
                <span className="cell-icon"><QuestionCircleOutlined /></span>
                <span className="cell-id" >
                    {/* <Link to={`/account/${value}`}> */}
                        {value}
                    {/* </Link> */}
                </span>
                </div>
                
            </>
        )
    },
    {
        Header: 'Certificates',
        accessor: 'Certificates',
        Cell: ({ cell: { value } }) => (
            <>
                <div className="wrap-long-text">
                <span className="cell-icon"><QuestionCircleOutlined /></span>
                <span className="cell-id" >
                    {/* <Link to={`/account/${value}`}> */}
                        {value}
                    {/* </Link> */}
                </span>
                </div>
                
            </>
        )
    },
    {
        Header: 'Create Time',
        accessor: 'Createtime',
    },
    {
        Header: 'Recent Time',
        accessor: 'RecentTime',
    },

];

const trimData = (data = []) =>
    data.map(({ id, BusinessId, Certificates, Createtime, RecentTime }, i) => ({
        // id: i+1,
        BusinessId,
        Certificates,
        Createtime: formatTime(Createtime),
        RecentTime: formatTime(RecentTime),
    }));

const initialState = {
    queryPageIndex: 0,
    queryPageSize: 20,
    totalCount: null,
};

const PAGE_CHANGED = 'PAGE_CHANGED';
const PAGE_SIZE_CHANGED = 'PAGE_SIZE_CHANGED';
const TOTAL_COUNT_CHANGED = 'TOTAL_COUNT_CHANGED';

const reducer = (state, { type, payload }) => {
    switch (type) {
        case PAGE_CHANGED:
            return {
                ...state,
                queryPageIndex: payload,
            };
        case PAGE_SIZE_CHANGED:
            return {
                ...state,
                queryPageSize: payload,
            };
        case TOTAL_COUNT_CHANGED:
            return {
                ...state,
                totalCount: payload,
            };
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }
};

const CertificateTable = () => {
    const navigate = useNavigate();
    const [{ queryPageIndex, queryPageSize, totalCount }, dispatch] =
        React.useReducer(reducer, initialState);

    const { isLoading, error, data, isSuccess } = useQuery(
        ['accounts', queryPageIndex, queryPageSize],
        () => getListContentType('/certificates', { page: queryPageIndex, limit: queryPageSize }),
        {
            keepPreviousData: true,
            staleTime: Infinity,
            refetchInterval: 1000 * 10,
        }
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        // Get the state from the instance
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data: isSuccess ? trimData(data) : [],
            // data: fakeData,
            initialState: {
                pageIndex: queryPageIndex,
                pageSize: queryPageSize,
            },
            manualPagination: true, // Tell the usePagination
            // hook that we'll handle our own data fetching
            // This means we'll also have to provide our own
            // pageCount.
            pageCount: isSuccess ? Math.ceil(totalCount / queryPageSize) : null,
            pageCount: totalCount != null ? Math.ceil(totalCount / queryPageSize) : null
        },
        usePagination
    );

    React.useEffect(() => {
        dispatch({ type: PAGE_CHANGED, payload: pageIndex });
    }, [pageIndex]);

    React.useEffect(() => {
        dispatch({ type: PAGE_SIZE_CHANGED, payload: pageSize });
        gotoPage(0);
    }, [pageSize, gotoPage]);

    const {
        contentTypeTotal: totalAccounts
    } = useContentTypeGetTotal('certificate/total');

    React.useEffect(() => {
        if (totalAccounts != undefined) {
            dispatch({
                type: TOTAL_COUNT_CHANGED,
                payload: totalAccounts,
            });
        }

    }, [totalAccounts]);

    if (error) {
        return <p>Error</p>;
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }


    return (
        <>
            <div className="table-section">
                <div className="table-header">
                    <span>More than &gt; {totalAccounts} accounts found</span>
                    <div className="pagnition-btn">
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                            {'First'}
                        </button>{' '}
                        <button className="bigger" onClick={() => previousPage()} disabled={!canPreviousPage}>
                            {'<'}
                        </button>{' '}
                        <span className="pag-index">
                            Page{' '}

                            {pageIndex + 1} of {pageOptions.length}

                        </span>{' '}
                        <button className="bigger" onClick={() => nextPage()} disabled={!canNextPage}>
                            {'>'}
                        </button>{' '}
                        <button
                            onClick={() => gotoPage(pageCount - 1)}
                            disabled={!canNextPage}
                        >
                            {'Last'}
                        </button>{' '}

                    </div>
                </div>
                {totalAccounts > 500 ?
                    <span className="table-hint">(Showing the last 500 records)</span>
                    :
                    <span className="table-hint">(Showing all the records)</span>
                }

                {isSuccess ? (
                    <>
                        <table {...getTableProps()} className="table">
                            <thead className="table-title">
                                {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()}>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()}>
                                                {column.render('Header')}
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...getTableBodyProps()} className="table-body">
                                {page.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => (
                                                <td className="relative" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <div className="pagination-bottom">
                            <div>
                                Show &nbsp;
                                <select
                                    className="select-page-size"
                                    value={pageSize}
                                    onChange={(e) => {
                                        setPageSize(Number(e.target.value));
                                    }}
                                >
                                    {[10, 20, 30, 40, 50].map((pageSize) => (
                                        <option key={pageSize} value={pageSize}>
                                            {pageSize}
                                        </option>
                                    ))}
                                </select>
                                &nbsp;
                                Records
                            </div>


                            <div className="pagnition-btn">
                                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                                    {'First'}
                                </button>{' '}
                                <button className="bigger" onClick={() => previousPage()} disabled={!canPreviousPage}>
                                    {'<'}
                                </button>{' '}
                                <span className="pag-index">
                                    Page{' '}

                                    {pageIndex + 1} of {pageOptions.length}

                                </span>{' '}
                                <button className="bigger" onClick={() => nextPage()} disabled={!canNextPage}>
                                    {'>'}
                                </button>{' '}
                                <button
                                    onClick={() => gotoPage(pageCount - 1)}
                                    disabled={!canNextPage}
                                >
                                    {'Last'}
                                </button>{' '}

                            </div>

                        </div>
                    </>
                ) : null}
            </div>
        </>
    )
}

export default CertificateTable;