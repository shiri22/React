import React from 'react'
import Container from "@material-ui/core/Container";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";


const Foodmenu = ({data}) => {
  return (
    // <div>
    //   <Container>
    //     <ImageList rowHeight={200} cols={4}>
    //       {data.map((image) => (
    //         <ImageListItem key={image.id}>
    //           <img
    //             src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
    //             alt={image.title}
    //           />
    //         </ImageListItem>
    //       ))}
    //     </ImageList>
    //   </Container>
    // </div>

    <div>
      <div className="row">
        {data.map((data) => (
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={data.recipe.image}
                alt="Card image cap"
              />
              <div class="card-body">
                <center>
                  <h5 class="card-title">{data.recipe.label}</h5>
                  <p class="card-text">
                    Total Amount Of Calories :{" "}
                    {Math.round(data.recipe.calories)}
                  </p>
                  <a href="#" class="btn btn-primary">
                    Buy
                  </a>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foodmenu