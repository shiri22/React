import React from 'react'

const Basics5 = () => {
    const arr= [
        {
            id:1,
            name:"shirisha",
            age:25
        },
        {
            id:2,
            name:"shiva",
            age:24
        },
        {
            id:3,
            name:"chinnareddy",
            age:45
        },
        {
            id:4,
            name:"jyothi",
            age:43
        }
    ]
  return (
    //map function example
    <div>
      {arr.map((value) => (
        <ul>
          <li key={value.id}>{value.name}</li>
          <li>{value.age}</li>
        </ul>
      ))}
    </div>
  );
}

export default Basics5