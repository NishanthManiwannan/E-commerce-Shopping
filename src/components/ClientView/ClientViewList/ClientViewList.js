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
import useStylesList from "./styleList";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../actions/products";

function ClientViewList({ productData, component, setCurrentId }) {
  //delete
  const dispatch = useDispatch();

  const classes = useStyles();
  const classesList = useStylesList();

  return (
    <>
      {component === 1 ? (
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

            <Button
              size="small"
              color="primary"
              onClick={() => dispatch(deleteProduct(productData._id))}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card className={classesList.card}>
          <div
            onClick={() => {
              console.log(productData._id);
            }}
          >
            <CardMedia
              className={classesList.media}
              image={productData.imgFile}
            />

            <CardContent>
              <Typography variant="h5" gutterBottom>
                {productData.prodectName}
              </Typography>
            </CardContent>
          </div>
        </Card>
      )}
    </>
  );
}

export default ClientViewList;
