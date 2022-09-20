import React from 'react'

const ClearButton = ({removeTasks}) => {
  return (
    <button className="clear-button" onClick={removeTasks}>Clear All</button>
  )
}

export default ClearButton