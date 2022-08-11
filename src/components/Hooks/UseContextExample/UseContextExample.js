import React from 'react'
import ComponentC from './ComponentC';

export const content = React.createContext();

const UseContextExample = () => {

  return (
    <div>
      <content.Provider value={"shirsha"}>
        <ComponentC />
      </content.Provider>
    </div>
  );
}

export default UseContextExample