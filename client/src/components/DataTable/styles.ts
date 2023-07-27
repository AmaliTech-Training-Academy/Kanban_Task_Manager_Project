// import styled from "styled-components";

// export const StyleTable = styled.table`
//   .container {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     max-height: 600px;
//     overflow-y: scroll;
//     -webkit-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//   }
//   table {
//     width: 800px;
//     height: 800px;
//     border-collapse: collapse;
//     overflow: hidden;
//     box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
//   }
//   th,
//   td {
//     padding: 15px;
//     background-color: rgba(255, 255, 255, 0.2);
//     /* color: #fff; */
//   }
//   th {
//     text-align: left;
//   }
//   thead th {
//     background-color: #55608f;
//   }
//   tbody tr:hover {
//     background-color: rgba(255, 255, 255, 0.3);
//   }
//   tbody td {
//     position: relative;
//   }
//   tbody td:hover:before {
//     content: "";
//     position: absolute;
//     left: 0;
//     right: 0;
//     top: -9999px;
//     bottom: -9999px;
//     background-color: rgba(255, 255, 255, 0.2);
//     z-index: -1;
//   }
// `;

import styled from "styled-components";

export const StyleTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 1rem;
  border: 1px solid red;
  position: relative;
  left: 20%;
  `;

export const StyleTh = styled.th`
  background-color: #f2f2f2;
  height: 52px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  text-align: left;
  border: 1px solid green;
  border-radius: 8px 8px 0px 0px;
  background-color: #e4ebfa;
  border: none;
  `;

export const StyleTd = styled.td`
  padding: 0.5rem 1rem;
  border: 1px solid gold;
  border-bottom: 1px solid pink;
  
  `



;





