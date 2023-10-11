const mongoose = require("mongoose")

const { 
    DBHOST, DBPORT,
    MONGO_INITDB_USER, MONGO_INITDB_PWD,
    MONGO_INITDB_DATABASE} = process.env;

let CONNECTION_STR = "";
if (DBHOST==undefined) {
    CONNECTION_STR = 'mongodb://localhost:27017/api_dev_db';
}else{
    CONNECTION_STR = `mongodb://${MONGO_INITDB_USER}:${MONGO_INITDB_PWD}@${DBHOST}:${DBPORT}/${MONGO_INITDB_DATABASE}?authSource=${MONGO_INITDB_DATABASE}`
}
console.log('CONNECTION_STR', CONNECTION_STR)
const connectDB = async ()=>{
    try {
        await mongoose.connect(CONNECTION_STR)
        console.log('Connect DB successfully!')
    } catch (error) {
        console.log('Connect DB error: ', error)
        process.exit(1)
    }
}

module.exports = connectDB;