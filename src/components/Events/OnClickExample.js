import React,{useState,useEffect} from 'react'

const Basics2 = () => {
    const [count, setCount] = useState(0);

        //useEffect will execute after return it executes once only we wont pass any dependency([])
    useEffect(() => {
        console.log(count);
    }, []);

  return (
    <div className="container">
    <h1>{count}</h1>
    <br></br>
    <button className="btn" onClick={()=>setCount(count+1)}>Increment</button>
    <button className="btn" onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Basics2