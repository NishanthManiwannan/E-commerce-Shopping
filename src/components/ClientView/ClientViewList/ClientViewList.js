import React from "react";

import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card,
} from "@material-ui/core";

import useStyles from "./styles";
import { useDispatch } from "react-redux";
import {deleteProduct} from '../../../actions/products'

function ClientViewList({ productData, component, setCurrentId }) {
  //delete
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      {component === 1 ? (
        <div
          onClick={() => {
            console.log(productData._id);
          }}
        >
          <Card className={classes.card}>
            <CardMedia className={classes.media} image={productData.imgFile} />

            <CardContent>
              <Typography variant="h5" gutterBottom>
                {productData.prodectName}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  setCurrentId(productData._id);
                }}
              >
                Update
              </Button>

              <Button size="small" color="primary" onClick={() => dispatch(deleteProduct(productData._id))}>
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ClientViewList;
