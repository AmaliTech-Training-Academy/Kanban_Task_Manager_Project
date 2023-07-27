import React, { useMemo } from "react";
import { useTable } from "react-table";
import userData from "../../userData.json";
import {StyleTable,StyleTh,StyleTd,TableContainer} from "./styles";
 

interface UserData {
  fullname: string;
  email: string;
  specialization: string;
  rank: string;
  status: string;
}

const DataTable: React.FC = () => {
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<UserData>({ columns, data });

  return (
     <TableContainer>
      <StyleTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyleTh key={column.id}>
                  <th {...column.getHeaderProps()}>
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
