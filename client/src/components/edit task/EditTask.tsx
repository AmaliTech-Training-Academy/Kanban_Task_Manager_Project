import React from 'react'
import {Stylecontainer} from './EditTast.styles'
import closeImage from '../assets/Group 18.svg'

const EditTask = () => {
  return (
    <Stylecontainer>
    <div className='container'>
        <form>
           <div className="headerClose">
            
           <div className="header">
                <h3>Edit Task</h3>
            </div>
            <div className="close-modal">
            <img src={closeImage} alt="" />           
            </div>
           </div>
            
            <label className='title'>Title </label>
            <input type="text" placeholder='e.g. Take coffee break'/>
            <label className='title'>Description </label>
            {/* <input type="text" placeholder='e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little.'/> */}
              <textarea name="" id="" cols="54" rows="10"></textarea>
            <label className='title'>Assignee </label>
            <input type="text" />
            <label className='title'>Due Date </label>
            <input type="text" placeholder='12th December 2023'/>
            <input type="submit" value="Update Task" className='submitt'/>
        </form>
    </div>
    </Stylecontainer>
  )
}

export default EditTask
