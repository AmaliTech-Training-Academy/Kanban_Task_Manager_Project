import React from 'react'
import { StyleFilterBtn } from './styles'


export const FilterBtn = () => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    (e.target.value)
  }


  


  return (
    <div>
      <StyleFilterBtn>
        <select className='FilterBtn' onChange={handleSelect}>
          <option defaultValue="specialization">
            {" "}
            Filters 
          </option>
          <label defaultValue="Filters"></label>

          <option value="Specialization">Specialization</option>
          <option value="Rank">Rank</option>
          <option value="Status">Status</option>
          <option value="Ascending">Sort Ascending</option>
          <option value="Descending">Sort Descending</option>
        </select>
      </StyleFilterBtn>
    </div>
  );
}
