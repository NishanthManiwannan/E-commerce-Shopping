import React, { useState } from "react";

import { Checkbox, TextField, Typography, Button } from "@mui/material";
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/products";

import useStyles from "./styles";

function Form() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [productData, setProductData] = useState({
    prodectName: "",
    sizes: [],
    catagory: "",
    discription: "",
    prize: "",
    qty: "",
    brand: "",
    imgFile: "",
  });

  const [arraySize, setArraySize] = useState([]);
  const [addCatagory, setCatagory] = useState([
    "",
    "Male Wears",
    "Female Wears",
    "Kids Wears",
    "Sports Wears",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
    dispatch(addProduct(productData));
  };

  const getCheckedVal = (e) => {
    if (e.target.checked) {
      arraySize.push(e.target.value);
      setArraySize(arraySize);
      setProductData({ ...productData, sizes: arraySize });
      console.log(productData);
    } else {
      var index = arraySize.indexOf(e.target.value);
      if (index > -1) {
        arraySize.splice(index, 1);
      }
      setProductData({ ...productData, sizes: arraySize });
      console.log(productData);
    }
  };

  const Add = addCatagory.map((Add) => Add);

  const getDropdownVal = (e) => {
    setProductData({ ...productData, catagory: addCatagory[e.target.value] });
    console.log(productData);
  };

  const clear = () => {};

  return (
    <>
      <form
        className={classes.formContainer}
        autoComplete="off"
        onSubmit={handleSubmit}
        noValidate
      >
        <Typography variant="h3" align="center">
          Add products
        </Typography>

        <div style={{ margin: "10px" }}>
          <TextField
            name="prodectName"
            variant="outlined"
            label="Prodect Name"
            size="small"
            spacing={3}
            fullWidth
            value={productData.prodectName}
            onChange={(e) =>
              setProductData({ ...productData, prodectName: e.target.value })
            }
          />
        </div>

        <div style={{ margin: "10px" }}>
          <div className={classes.checkBox}>
            <p>Select Available Sizes :</p>
            <span>
              Small
              <Checkbox
                color="default"
                value="S"
                size="small"
                onChange={(e) => getCheckedVal(e)}
              />
            </span>
            <span>
              Medium
              <Checkbox
                color="default"
                value="M"
                size="small"
                onChange={(e) => getCheckedVal(e)}
              />
            </span>
            <span>
              Large
              <Checkbox
                color="default"
                value="L"
                size="small"
                onChange={(e) => getCheckedVal(e)}
              />
            </span>
            <span>
              XL
              <Checkbox
                color="default"
                value="XL"
                size="small"
                onChange={(e) => getCheckedVal(e)}
              />
            </span>
          </div>
        </div>

        <div style={{ margin: "10px" }}>
          <p>Select Catagory :</p>
          <select onChange={(e) => getDropdownVal(e)}>
            {Add.map((address, key) => (
              <option key={key} value={key}>
                {address}
              </option>
            ))}
          </select>
        </div>

        <div style={{ margin: "10px" }}>
          <TextField
            name="discription"
            variant="outlined"
            label="Discription"
            fullWidth
            size="small"
            value={productData.discription}
            onChange={(e) =>
              setProductData({ ...productData, discription: e.target.value })
            }
          />
        </div>

        <div style={{ margin: "10px" }}>
          <TextField
            name="prize"
            variant="outlined"
            label="Prize"
            fullWidth
            size="small"
            value={productData.prize}
            onChange={(e) =>
              setProductData({ ...productData, prize: e.target.value })
            }
          />
        </div>

        <div style={{ margin: "10px" }}>
          <TextField
            name="qty"
            variant="outlined"
            label="Quantity"
            fullWidth
            size="small"
            value={productData.qty}
            onChange={(e) =>
              setProductData({ ...productData, qty: e.target.value })
            }
          />
        </div>

        <div style={{ margin: "10px" }}>
          <TextField
            name="brand"
            variant="outlined"
            label="Brand"
            fullWidth
            size="small"
            value={productData.brand}
            onChange={(e) =>
              setProductData({ ...productData, brand: e.target.value })
            }
          />
        </div>

        <div style={{ margin: "10px" }}>
          <p>Select Image FIle :</p>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setProductData({ ...productData, imgFile: base64 })
            }
          ></FileBase>
        </div>

        <div style={{ margin: "10px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#000000" }}
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </div>
        
        <div style={{ margin: "10px" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#ffff", color: "#000" }}
            size="large"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </>
  );
}

export default Form;
