const mysql= require ("mysql");
const conexion=mysql.createConnection({
   // host:"localhost",
   host:"sql10.freemysqlhosting.net",
    user:"sql10584711",
    password:"cFjV2JBe38",
    port:"3306",
    database:"sql10584711"
});

conexion.connect((error) =>{
    if(error){
        console.log("ocurrio un poblema al conectar la base de datos! ");
    }
    else{
        console.log("conectado ok, a la bd");
    }
});

module.exports=conexion;
