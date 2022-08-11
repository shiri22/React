import React, { useReducer } from 'react'

const initialState = {count:0}

const reducer = (state,action)=>{
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };
      case "Decrement":
        return { count: state.count - 1 };
      default:
        throw new Error();
    }

}

const Exam = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <center>
        Count :{state.count} <br/>
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>
      </center>
    </div>
  );
}

export default Exam