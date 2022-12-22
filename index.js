require ("./conf/conexion");

const express = require("express");

const port=(process.env.port || 3000 );

const app=express();
const cors=require("cors")
//configuracion
app.use(cors());// para usar la api todos
app.set("port",port)
app.use(express.json()); //usamos json para el envio de datos
app.set("json spaces",2); //seteamos json con 2 spacios

//rutas de navegacion

app.use("/api", require("./rutas"))
////////
// iniciar express

app.listen(app.get("port"), (error)=>{
    if (error){
    console.log("error de conexion");
    }
    else{
        console.log("servidor iniciado correctamente");


    }
});



