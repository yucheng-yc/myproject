const mysql=require("mysql");
const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"user",
    connectionLimit:20
});
module.exports=pool;