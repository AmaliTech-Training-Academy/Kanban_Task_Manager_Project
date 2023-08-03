import * as React from 'react'
import { KanbanNavbar } from '../../dashboard-navbar'
import { KanbanSidebar } from '../../dashboard-sidebar'
import TaskBoard from '../taskboard/TaskBoard'


export const DashBoardPage = () => {
  return (
    <div className='dashboard-grid'> 
<KanbanNavbar/>
<KanbanSidebar/>
{/* <TaskBoard /> */}
    </div>
  )
}
