import axios from "axios";
import React, { useState } from "react";
import GalleryList from "./GalleryList";

const Gallery = () => {
    const [search,setSearch] = useState("");
    const [data,setData] = useState([]);
    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

    const handler=e=>{
        setSearch(e.target.value)
    }

    const submitHandler=e=>{
        e.preventDefault();
        axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
      .then((res) => setData(res.data.photos.photo))
      
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <input type="search" value={search} onChange={handler}/><br/>
                <input type="submit" value="search"/>
            </form><br/>
            {data.length>=1 ? <GalleryList data={data} /> :<h1>Not Loaded...</h1>}
        </center>

    </div>
  )
}

export default Gallery
