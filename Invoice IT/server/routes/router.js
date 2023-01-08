const express = require("express");
const router = express.Router();
const puchaseorders = require("../models/purchaseorders")


//send data to db
router.post("/add", async(req,res)=>{
    console.log(req.body);
    const {order,date,po,name,id,status,createdby,address}=req.body;

    if(!order ||!po ||!name ||!id ||!status ||!createdby ||!address){
        res.status(404).json("please enter all the details")
    }
    try{

        const preuser = await puchaseorders.findOne({order:order});
        console.log(preuser);

        if(preuser){
            res.status(404).json("This order is already present");
        }
        else{
            const adpo = new puchaseorders({
                order,date,po,name,id,status,createdby,address
            });
            await adpo.save();
            res.status(201).json(adpo)
            console.log(adpo)
        }


    }catch(err){
        res.status(404).json(err)
    }
})


//get all po data
router.get("/getdata",async(req,res)=>{
    try{
const getpuchaseorder = await puchaseorders.find();
res.status(201).json(getpuchaseorder);
console.log(getpuchaseorder);
    }catch(err){
        res.status(404).json(err)

    }
})

//get one po data

router.get("/getpo/:id",async(req,res)=>{
    try{


        console.log(req.params)
const {id} = req.params;
const singlepo = await puchaseorders.findById({_id:id});
console.log(singlepo);
res.status(201).json(singlepo)


    }catch(err){
        res.status(404).json(err)

    }
})


//update the po (edit)

router.patch("/edit/:id", async(req,res)=>{
try{
    const {id} = req.params;
    const updatedpo = await puchaseorders.findByIdAndUpdate({_id:id},req.body,{
        new:true
    });
    console.log(updatedpo);
    res.status(201).json(updatedpo);


}catch(err){

    res.status(404).json(err)

}

})


//delete po

router.delete("/delete/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        const deletedpo = await puchaseorders.findByIdAndDelete({_id:id});
        console.log(deletedpo);
        res.status(201).json(deletedpo);
    
    
    }catch(err){
    
        res.status(404).json(err)
    
    }
})




module.exports = router;