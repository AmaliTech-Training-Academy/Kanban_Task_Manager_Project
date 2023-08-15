import * as React from 'react'
import { KanbanNavbar } from '../../dashboard-navbar'
import { KanbanSidebar } from '../../dashboard-sidebar'
import DataTable from '../DataTable'
import TaskBoard from '../taskboard/TaskBoard'
import { useNavigate } from 'react-router'



export const DashBoardPage = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  React.useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    //TODO: Validate token
  }, []);

  return (
    <div className='dashboard-grid'> 
<KanbanNavbar/>
<KanbanSidebar/>
<DataTable/>
{/* <TaskBoard /> */}
    </div>
  )


}
