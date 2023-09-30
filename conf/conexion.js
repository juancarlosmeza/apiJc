const mysql= require ("mysql");
const conexion=mysql.createConnection({
   // host:"localhost",
   //host:"sql10.freemysqlhosting.net",
   //user:"sql10584711",
   //password:"cFjV2JBe38",
   //port:"3306",
   //database:"sql10584711"
  // host:"mysql-101398-0.cloudclusters.net",
   // user:"juanca",
   // password:"Coop1234+1",
   // port:"10143",
   // database:"db_basico"

    //host: "db4free.net/phpMyAdmin",
      host:"db4free.net", 
   user:"juanca",
    password:"484000co",
    port:"3306",
    database:"juancabd"
   
    
});

conexion.connect((error) =>{
    if(error){
        console.log(" JC ocurrio un poblema al conectar la base de datos! ");
    }
    else{
        console.log("conectado ok, a la bd");
    }
});

module.exports=conexion;
