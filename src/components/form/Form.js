import React, { useState } from "react";

import { Checkbox, TextField, Typography, Button } from "@mui/material";
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";

import { addProduct } from "../../actions/products";

function Form() {
  const dispatch = useDispatch();

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
      <form autoComplete="off" onSubmit={handleSubmit} noValidate>
        <Typography varient="h3">Add product item here</Typography>

        <TextField
          name="prodectName"
          variant="outlined"
          label="Prodect Name"
          fullWidth
          value={productData.prodectName}
          onChange={(e) =>
            setProductData({ ...productData, prodectName: e.target.value })
          }
        />

        <div>
          <p>
            Small
            <Checkbox
              color="default"
              value="S"
              onChange={(e) => getCheckedVal(e)}
            />
          </p>
          <p>
            Medium
            <Checkbox
              color="default"
              value="M"
              onChange={(e) => getCheckedVal(e)}
            />
          </p>
          <p>
            Large
            <Checkbox
              color="default"
              value="L"
              onChange={(e) => getCheckedVal(e)}
            />
          </p>
          <p>
            XL
            <Checkbox
              color="default"
              value="XL"
              onChange={(e) => getCheckedVal(e)}
            />
          </p>
        </div>

        <select onChange={(e) => getDropdownVal(e)}>
          {Add.map((address, key) => (
            <option key={key} value={key}>
              {address}
            </option>
          ))}
        </select>

        <TextField
          name="discription"
          variant="outlined"
          label="Discription"
          fullWidth
          value={productData.discription}
          onChange={(e) =>
            setProductData({ ...productData, discription: e.target.value })
          }
        />

        <TextField
          name="prize"
          variant="outlined"
          label="Prize"
          fullWidth
          value={productData.prize}
          onChange={(e) =>
            setProductData({ ...productData, prize: e.target.value })
          }
        />

        <TextField
          name="qty"
          variant="outlined"
          label="Quantity"
          fullWidth
          value={productData.qty}
          onChange={(e) =>
            setProductData({ ...productData, qty: e.target.value })
          }
        />

        <TextField
          name="brand"
          variant="outlined"
          label="Brand"
          fullWidth
          value={productData.brand}
          onChange={(e) =>
            setProductData({ ...productData, brand: e.target.value })
          }
        />

        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setProductData({ ...productData, imgFile: base64 })
          }
        ></FileBase>

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </>
  );
}

export default Form;
