import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div style={{marginTop:"20px"}}>
      <center>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/1600x800/?burger"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}

export default Home