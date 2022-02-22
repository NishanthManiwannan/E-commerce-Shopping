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

function ClientViewList({ productData, component }) {
  const classes = useStyles();

  return (
    <div
      onClick={() => {
        console.log(productData._id);
      }}
    >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={productData.imgFile}
        />

        <CardContent>
          <Typography variant="h5" gutterBottom>
            {productData.prodectName}
          </Typography>
        </CardContent>

        {component === 1 ? 
        <CardActions>
          <Button size="small" color="primary" onClick={() => {}}>
            Thump
            {productData.likeCount}
          </Button>

          <Button size="small" color="primary" onClick={() => {}}>
            Delete
          </Button>
        </CardActions>
        :

      ''
      }
      </Card>
    </div>
  );
}

export default ClientViewList;
