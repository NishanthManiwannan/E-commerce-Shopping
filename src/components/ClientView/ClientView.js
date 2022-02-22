import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions/products";

import {Grid, CircularProgress} from '@material-ui/core'
import ClientViewList from './ClientViewList/ClientViewList';

import useStyles from "./styles";

function ClientView() {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])
  
  const product = useSelector((state) => state.products);

  return (
    !product.length ? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {
            product.map((productData) => (
              <Grid key={productData._id} item xs={12} sm={6}>
                  <ClientViewList productData={productData} component={2}/>
              </Grid>
            ))
          }
      </Grid>
    )
  )
}

export default ClientView