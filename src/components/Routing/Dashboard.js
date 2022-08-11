import React from 'react'
import { Link, useParams } from "react-router-dom";
const Dashboard = () => {
   const { name } = useParams();
  return (
    <div>
      <center> Welcome to Dashboard Page:{name}</center>
    </div>
  );
}

export default Dashboard