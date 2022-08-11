import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImagesData from './ImagesData.json'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LinkedCameraIcon from "@material-ui/icons/LinkedCamera";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  text: {
    margin: "20px",
    padding: "20px 50px",
  },
});

const MaterialUi = () => {
    const classes =  useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <LinkedCameraIcon/>
            Photography
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Typography variant="h3">Our Latest Version of Photography</Typography>
        <Typography variant="p">
          pleasure to take your photos as well,please fill below form for our
          services
        </Typography>
      </Container>
      <Container>
        <ImageList className={classes.text}
          rowHeight={200}
          cols={4}
        >
          {ImagesData.map((item) => (
            <ImageListItem key={item.id} col={1}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <center>
        <Container>
          <Typography variant="h3">Register</Typography>

          <form>
            <TextField
              style={{ margin: "10px", width: "500px" }}
              type="text"
              label="Name"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ margin: "10px", width: "500px" }}
              type="email"
              label="Email"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ margin: "10px", width: "500px" }}
              type="text"
              label="Purpose"
              variant="outlined"
            />
            <br />
            <Button
              style={{ marginBottom: "10px" }}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </form>
        </Container>
      </center>
    </div>
  );
}

export default MaterialUi