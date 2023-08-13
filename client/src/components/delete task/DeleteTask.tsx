import * as React from 'react'
import { useState } from 'react'
import {Stylecontainer} from './DeleteTask.styles'
import closeImage from '../../assets/Icons/Group 18.svg'

const DeleteTask = ({closeDeleteModal}) => {
  return (
    <Stylecontainer>
    <div className='container'>
      <div className="delete-modal">
           <div className="headerClose">
            
           <div className="header">
                <h3>Delete Task</h3>
            </div>
            <div className="close-modal">
            <img src={closeImage} alt="" onClick={closeDeleteModal}/>           
            </div>
           </div>
           <p>
           Hey, are you sure you want to delete  this task?  Please remember that this action cannot be undone
           </p>
            
            <input type="submit" value="No keep" className='submittt'/>
            <input type="submit" value="Yes, Delete" className='submitt'/>
    </div>
      </div>
    </Stylecontainer>
  )
}

export default DeleteTask
