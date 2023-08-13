// import { Stylecontainer } from "./Progress.styles";

// import React,{useState} from 'react'

// const Progress = () => {
//     const [progress, setProgress] = useState("60");

//   return (
//     <>
//       <Stylecontainer>
//       <div className="card-progress-container">
//       <div className="card-progress-percentage">
//         <label className="label">Progress</label>
//         <label className="label">{progress}%</label>
//       </div>
//       <div className="card-progress-bar-container">
//         <div className="card-progress-bar">
//           <div
//             className="card-progress-bar-fill"
//             style={{ width: `${progress}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>

//       </Stylecontainer>
//     </>
//   )
// }

// export default Progress
// const CardDetails = () => {
// export default const Progress = ({ percentage }) => {
//   return (
//     <>
//       {percentage && (
//         <div className="card-progress-container">
//           <div className="card-progress-percentage">
//             <label className="label">Progress</label>
//             <label className="label">{percentage}%</label>
//           </div>
//           <div className="card-progress-bar-container">
//             <div className="card-progress-bar">
//               <div
//                 className="card-progress-bar-fill"
//                 style={{ width: `${percentage}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
import * as React from 'react'
// import "./App.css";


const Progress = ({ percentage }:any):any => {
  return (
    <>
      {percentage && (
        <div className="card-progress-container">
          <div className="card-progress-percentage">
            <label className="label">Progress</label>
            <label className="label">{percentage}%</label>
          </div>
          <div className="card-progress-bar-container">
            <div className="card-progress-bar">
              <div
                className="card-progress-bar-fill"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Progress



