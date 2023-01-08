const mongoose = require('mongoose');

newpurchaseorderSchema = new mongoose.Schema({

    order: {
        type: Number,
        required: true,
        unique:true
    },
    date: {
        type:String,
    },
    po: {type:String,
    required:true},
    name: {
        type:String,
        required:true,
        unique:true
    },
    id: {
        type:String,
        required:true
    },
    status:  {
        type:String,
        required:true
    },
    createdby:  {
        type:String,
        required:true
    },
    address:  {
        type:String,
        required:true
    }
});

const purchaseorders =new mongoose.model('purchaseorders',newpurchaseorderSchema);

module.exports = purchaseorders;
