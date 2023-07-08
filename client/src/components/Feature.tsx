import React from 'react'

const Feature = ({icon,header,description}) => {
  return (
    <div className="card">
      <img src={icon} alt="" />
      <h1>{header}</h1>
      <p className="p1">{description}</p>
    </div>
)
}

export default Feature