import React, { useState, useEffect } from "react";

import { Checkbox, TextField, Typography, Button } from "@mui/material";
import FileBase from "react-file-base64";

import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../../actions/products";

import useStyles from "./styles";

function Form({ currentId, setCurrentId }) {
  //- use selectr for find the product for purticular id
  const product = useSelector((state) =>
    currentId ? state.products.find((id) => id._id === currentId) : null
  );

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
  const [sizes, setSizes] = useState(["S", "M", "L", "XL"]);

  useEffect(() => {
    if (product){
      setProductData(product);
      setArraySize(product.sizes);
      document.getElementById("catagory").value = product.catagory;
    } 
  }, [product]);

  const getCheckedVal = (e) => {
    console.log(e.target.checked)
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
    setProductData({ ...productData, catagory: e.target.value });
    console.log(productData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateProduct(currentId, productData));
    } else {
      dispatch(addProduct(productData));
    }

    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setProductData({
      prodectName: "",
      sizes: [],
      catagory: "",
      discription: "",
      prize: "",
      qty: "",
      brand: "",
      imgFile: "",
    });
    document.getElementById("catagory").value = null;
  };

  return (
    <>
      <form
        className={classes.formContainer}
        autoComplete="off"
        onSubmit={handleSubmit}
        noValidate
      >
        <Typography variant="h3" align="center">
          {currentId ? "Update" : "Add New"} product
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
            {sizes.map((sizes) => (
              <span>
                {sizes}
                <Checkbox
                  color="default"
                  value={sizes}
                  size="small"
                  checked={currentId ? arraySize.includes(sizes) : (null)}
                  onChange={(e) => getCheckedVal(e)}
                />
              </span>
            ))}
          </div>
        </div>

        <div style={{ margin: "10px" }}>
          <p>Select Catagory :</p>
          <select id="catagory" onChange={(e) => getDropdownVal(e)}>
            {Add.map((address, key) => (
              <option key={key} value={address}>
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
            {currentId ? "Update Product" : "Add Product"}
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
