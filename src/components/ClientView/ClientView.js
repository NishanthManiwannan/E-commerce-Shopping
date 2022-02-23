import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions/products";

import { Grid, CircularProgress } from "@material-ui/core";
import ClientViewList from "./ClientViewList/ClientViewList";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

// import useStyles from "./styles";

function ClientView({setCurrentId}) {
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const product = useSelector((state) => state.products);

  const catagory = ["Male Wears", "Female Wears", "Kids Wears", "Sports Wears"];

  return (
    <div>
      {catagory.map((catagory) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{catagory}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {product.map((productData) =>
              productData.catagory === catagory ? (
                <Grid key={productData._id} item xs={12}>
                  <ClientViewList productData={productData} component={1} setCurrentId={setCurrentId}/>
                </Grid>
              ) : (
                ""
              )
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default ClientView;
