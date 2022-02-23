import mongoose from "mongoose";
import mongoConnection from "../model/model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await mongoConnection.find();
    console.log(products);
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createNewProducts = async (req, res) => {
  const products = req.body;
  const newProducts = new mongoConnection(products);

  try {
    await newProducts.save();
    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Id not found");

  const updateProduct = await mongoConnection.findByIdAndUpdate(
    _id,
    { ...product, _id },
    { new: true }
  );

  res.json(updateProduct);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No product with that id");
    await mongoConnection.findByIdAndRemove(id);
  
    res.json({ message: "Product deleted" });
  };