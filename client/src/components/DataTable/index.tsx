import React, { useMemo } from "react";
import userData from "../../userData.json";
import {StyleTable,StyleTh,StyleTd,TableContainer,StyleBtnsContainer,} from "./styles";
import StatusIndicator from "./StatusIndcator";
import { FilterBtn } from "../DataFilterBtn";

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
        Cell: ({ value }) => <StatusIndicator status={value} />,
      },
    ],
    []
  );

  return (
    <TableContainer>
      <StyleBtnsContainer>
        <div className="DataTable-BtnsContainer">
          <FilterBtn />
        </div>
      </StyleBtnsContainer>
      <StyleTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <StyleTh key={column.accessor}>
                <th>{column.Header}</th>
              </StyleTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr>
                {columns.map((column) => (
                  <StyleTd key={column.accessor}>
                    <td>{row[column.accessor]}</td>
                  </StyleTd>
                ))}
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </StyleTable>
    </TableContainer>
  );
};

export default DataTable;
