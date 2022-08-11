import React, { useState } from "react";

const FoodRecipe = () => {
    const [search,setSearch] = useState("")
    const [data,setData] = useState([])
      const YOUR_APP_ID = "8aecf864";
      const YOUR_APP_KEY = "b460ca299374805ea2ad4be4f6ea081a";
      const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
    const handler = e=>{
        setSearch(e.target.value)
    }
    const submitHandler=e=>{
        e.preventDefault();
        fetch(
          `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`
        )
          .then((response) => response.json())
          .then((data) => setData(data.hits));
        setSearch("")
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <h1>Food Recipe Application</h1>
                <input type="search" value={search} onChange={handler}/><br/>
                <input type="submit" />
            </form>
            </center>
            {
                data.length>=1 ? <FoodRecipe data={data}/>:<h6>Not Loaded....</h6>
            }
    </div>
  )
}

export default FoodRecipe