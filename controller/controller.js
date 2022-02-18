import mongoConnection from '../model/model.js'

export const getProducts = async (req, res) => {
    try{
        const products = await mongoConnection.find();
        console.log(products);
        res.status(200).json(products);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

export const createNewProducts = async (req, res) => {
    const products = req.body;
    const newProducts = new mongoConnection(products);

    try{
        await newProducts.save();
        res.status(200).json(products);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}