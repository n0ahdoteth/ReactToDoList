import React from 'react'
import Task from './Task'


const TaskList = ({taskList, removeTask}) => {


    return (
        <div className="list-div">
            {taskList.map(item => {
                    return (
                        <div class="task-style">
                            <Task className="task-styling" task={item.task} removeTask={removeTask} key={item.id} />
                        </div>
                    ) 
                })}
        </div>
    )
}

export default TaskList