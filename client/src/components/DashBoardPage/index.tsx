import * as React from 'react'
import { KanbanNavbar } from '../../dashboard-navbar'
import { KanbanSidebar } from '../../dashboard-sidebar'
import DataTable from '../DataTable'


export const DashBoardPage = () => {
  return (
    <div> 
<KanbanNavbar/>
<KanbanSidebar/>
<DataTable/>
    </div>
  )
}
