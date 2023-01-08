const mongoose = require('mongoose');




const DB = "mongodb+srv://invoiceit:invoiceit@cluster0.tzqt1fg.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(DB, {
    

    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("conection started")
}).catch((err)=>{console.log(err.message)})



