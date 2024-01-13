const mongoose = require('mongoose');

const dbConnect = async() => {
    try{
        const res = await (mongoose.connect(process.env.mongoUrl));
        console.log("your DB is connected");
    }
    catch(err){
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = dbConnect;