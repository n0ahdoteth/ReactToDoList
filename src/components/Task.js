import React from 'react'
import CheckBox from './CheckBox'

const Task = ({task}) => {

    return (
        <div className={task.isDone ? "doneColor" : ""} name="task" >
           <CheckBox />
            {task}
        </div>
    )
}

export default Task