const ex = require("express");
const { MongoClient } = require('mongodb');
const { route } = require("express/lib/application");
const BuzzBoard = require("../models/BuzzBoard");
const router = ex.Router();


router.post("/create", async(req, res) => {
        try{
            const username = await BuzzBoard.find({ order_id : req.body.order_id });
                if( username[0] == undefined)
                {
                    const ans = await BuzzBoard.create(req.body);
                    res.status(200).json({
                            "MSG":"Data Stored",
                            "ans":ans
                    })
                }
                else{
                    res.json({
                        "MSG":"Duplicate Order"
                    })
                }
        }
        catch(err){
            res.json(err);
        }
})


//to update order
router.put("/update", async(req, res) => {
                        try{
                                    const updated_order = await BuzzBoard.updateOne({
                                        "order_id": req.body.order_id
                                    },
                                    req.body
                                    )
                                    res.json({
                                        "MSG":"Order Updated",
                                        updated_order
                                    })
                            }
                            catch(err){
                                res.json(err)
                            }
})



//List of all orders for a given date in yyyy/mm/dd format
router.get("/list", async(req, res) => {
                try
                {
                    const list = await BuzzBoard.find({ order_date:req.body.order_date });
                    res.status(200).json({
                        list
                    })
                }
                catch(err){
                    res.json(err)
                }
})



//for a specific order with order ID
router.get("/search", async(req, res) => {
                        try {
                                const order = await BuzzBoard.find({
                                    "order_id":req.body.order_id
                                });
                                res.json(order)
                            } 
                            catch (err) {
                                res.json(err);
                            }
                        
})




//delete privilege
router.delete("/delete", async(req, res) => {
                        try {
                            await BuzzBoard.deleteOne({ "order_id": req.body.order_id })
                            res.status(200).json({
                                message: "Order deleted"
                            })
                        } catch (err) {
                            res.json(err);
                        }
})



module.exports = router

