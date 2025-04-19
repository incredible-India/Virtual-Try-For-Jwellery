const express = require("express");
const router = express.Router();
const { prisma } = require("../DBConnection/dbConnection");
const {generateToken} =  require("./../Auth/jwt")


router.post("/addproduct", async (req,res)=>{
    const { name     ,    
        brand    ,     
        imageUrl   ,   
        price   ,        
        description    ,
        type ,           
        isVirtualEnable ,
        discount        }  = req.body;

        try {

            const product =  await prisma.jewellery.create({
                name     ,    
                brand    ,     
                imageUrl   ,   
                price   ,        
                description    ,
                type ,           
                isVirtualEnable ,
                discount  
            })

            return res.status(201).json("message","Jewellery is added successfully")
            
        } catch (error) {
            res.status(500).json({"message" : "Unable to connect in db"})
        }
})