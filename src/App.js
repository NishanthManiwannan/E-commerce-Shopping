import React, { useEffect, useState } from "react";

import Form from "./components/AdminForm/AdminForm";
import Navbar from "./components/NavBar/Navbar";
import View from "./components/ClientView/ClientView";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

//- required for update product
import { useDispatch } from "react-redux";
import { getProducts } from "./actions/products";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [currentId, dispatch]);

  return (
    <>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={5}>
                <Form setCurrentId={setCurrentId} currentId={currentId} />
              </Grid>

              <Grid item xs={12} sm={7}>
                <View setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
