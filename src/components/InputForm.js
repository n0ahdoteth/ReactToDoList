import React from 'react'

const InputForm = ({input, submitTask, changeEvent}) => {
  return (
    <form onSubmit={submitTask}>
                <input
                        placeholder="Add a new task"
                        value={input}
                        type="text"
                        onChange={changeEvent}
                        minLength={1}
                        className="input-styles"
                        required={true}
                        maxLength={30}
                />
			<button>Enter</button>
	</form>
  )
}

export default InputForm