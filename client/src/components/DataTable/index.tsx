import React, { useMemo, useState } from "react";
import {useFilters,  useSortBy, useTable, FilterValue,IdType} from "react-table";
import userData from "../../userData.json";
import { StyleTable, StyleTh, StyleTd, TableContainer } from "./styles";

interface UserData {
  fullname: string;
  email: string;
  specialization: string;
  rank: string;
  status: string;
}

// Custom filter function for dropdown filtering
const customFilter: FilterValue = (
  rows: any[],
  id: IdType<any>,
  filterValue: any
) => {
  if (filterValue === "") {
    return rows;
  }

  return rows.filter((row) => {
    const rowValue = row.values[id];
    return String(rowValue).toLowerCase().includes(filterValue.toLowerCase());
  });
};

const DataTable: React.FC = () => {
  const [filterBy, setFilterBy] = useState<string>("specialization"); // Default filter option

  const data: UserData[] = useMemo(() => userData.user, []); // Access the 'user' array from userData

  const columns = useMemo(
    () => [
      {
        Header: "Fullname",
        accessor: "fullname",
        Cell: ({ row }) => (
          <div>
            <img
              src={row.original.photo}
              alt="User"
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
            />
            <span>{row.original.fullname}</span>
          </div>
        ),
      },
      {
        Header: "Email address",
        accessor: "email",
      },
      {
        Header: "Specialization",
        accessor: "specialization",
      },
      {
        Header: "Rank/Level",
        accessor: "rank",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    state,
  } = useTable<UserData>({ columns, data }, useFilters, useSortBy);

  const handleFilterChange = (selectedOption: string) => {
    setFilterBy(selectedOption);
    setFilter(selectedOption, ""); // Reset the filter value when changing the filter option
  };

  const handleSortChange = (selectedOption: string) => {
    setFilterBy(selectedOption);
  };

  return (
    <TableContainer>
      <div>
        <button>
          Filter by:
          <select value={filterBy} onChange={handleFilterChange}>
            <option value="specialization">Specialization</option>
            <option value="rank">Rank</option>
            <option value="status">Status</option>
            <option value="fullname">Alphabetical Order</option>
          </select>
          <span>
            {state?.sortBy?.length ? (
              <span>
                Sort by:{" "}
                {state.sortBy.map((sortItem: any) => (
                  <span key={sortItem.id}>
                    {sortItem.id} {sortItem.desc ? "🔽" : "🔼"}
                  </span>
                ))}
              </span>
            ) : null}
          </span>
        </button>
      </div>
      <StyleTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyleTh key={column.id}>
                  <th
                    {...column.getHeaderProps(
                      column.getSortByToggleProps({
                        onClick: () => handleSortChange(column.id),
                      })
                    )}
                  >
                    {column.render("Header")}
                  </th>
                </StyleTh>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.id}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <StyleTd key={cell.column.id}>
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    </StyleTd>
                  ))}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </StyleTable>
    </TableContainer>
  );
};

export default DataTable;
