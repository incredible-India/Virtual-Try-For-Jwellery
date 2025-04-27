const express = require("express");
const router = express.Router();
const { prisma } = require("../DBConnection/dbConnection");
const { generateToken } = require("./../Auth/jwt");

//for the single entry of the product
router.post("/addproduct", async (req, res) => {
  const {
    name,
    brand,
    imageUrl,
    price,
    description,
    type,
    isVirtualEnable,
    discount
  } = req.body;

  try {
    const product = await prisma.jewellery.create({
      data: {
        name,
        brand,
        imageUrl,
        price,
        description,
        type,
        isVirtualEnable,
        discount
      }
    });

    return res.status(201).json({ message: "Jewellery is added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to connect to db" });
  }
});

//for the bulk entry of the product
router.post("/addproducts/bulk", async (req, res) => {
    const products = req.body; 
  
    try {
      const createdProducts = await prisma.jewellery.createMany({
        data: products
      });
  
      return res.status(201).json({ message: "Jewelleries added successfully", count: createdProducts.count });
    } catch (error) {
      console.error(error); // <--- ADD THIS to see real error
      res.status(500).json({ message: "Unable to add products to db", error: error.message });
    }
  });
  

  //getting the items from the db


  router.get("/getproducts", async (req, res) => {
    try {
      const products = await prisma.jewellery.findMany();
      return res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Unable to connect to db" });
    }
  });

module.exports = router;
