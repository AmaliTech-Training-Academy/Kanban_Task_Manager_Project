import React, { useState } from "react";
import { StyleFilterBtn } from "./styles";
import dropDownImg from "../assets/Icons/Chevron.svg"

export const FilterBtn = () => {
  const [showFilter, setShowFilter] = useState(true);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value;
  };

  const toggleFilter = () => setShowFilter(!showFilter);
  return (
    <div>
      <StyleFilterBtn onClick={toggleFilter}>
        <div className="BtnText-Img">
          Filter by Specialization
          <img  src={dropDownImg} alt="" />
        </div>
        {showFilter && (
          <div className="FilterDropDown">
            <p>
              <input type="checkbox" />
              Specialization
            </p>
            <p>
              <input type="checkbox" />
              Rank
            </p>
            <p>
              <input type="checkbox" />
              Sort Ascending
            </p>
            <p>
              <span className="down-arrow">
                &#8595;
               
              </span>
              Sort Descending
            </p>
          </div>
        )}
      </StyleFilterBtn>
    </div>
  );
};
