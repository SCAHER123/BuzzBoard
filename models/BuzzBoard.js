const mongoose=require("mongoose");

const BuzzBoard=mongoose.Schema({
    order_id:{
        type:String
    },
    item_name:{
        type:String
    },
    cost:{
        type:String
    },
    order_date:{
        type:String
    },
    delivery_date:{
        type:String
    }
});

module.exports=mongoose.model("Orders",BuzzBoard)