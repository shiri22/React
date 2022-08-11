import React from 'react'
import Container from "@material-ui/core/Container";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const GalleryList = ({data}) => {
  return (
    <div>
      {/* <div className="row">
        {data.map((image) => (
          <div key={image.id}>
            <div className="col-md-4">
              <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                height="200"
                width="250"
              />
            </div>
          </div>
        ))}
      </div> */}

      <Container>
        <ImageList rowHeight={200} cols={4}>
          {data.map((image) => (
            <ImageListItem key={image.id} col={1}>
              <img src={data.recipe.image} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}

export default GalleryList