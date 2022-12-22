const router =require ("express").Router();
const conexion= require("./conf/conexion");


//asignamos todas las rutas
/*

router.get("/",function(req, res){
    res.send("pagina principal");
    

});
*/

//todos los equipos
router.get("/",(req,res)=>{

    let sql=`select * from tb_equipo`
            conexion.query(sql, (err,rows, fields)=>{
        if(err) {
            console.log("error");
        }
        else{
                 res.json(rows)
              
               
                console.log(rows);
            }
 
    });
});


//agregar equipo
router.post('/',( req, res)=>{
    const{nombre, logo} = req.body

    let sql = `insert into tb_equipo(nombre, logo) values('${nombre}','${logo}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo agregado'})
        }
    })
})

// get un equipo
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from tb_equipo where id_equipo = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})


// eliminar

router.delete("/:id",(req, res)=>{
    const{id}=req.params
    let sql=`delete from tb_equipo where id_equipo= ${id}`  
    conexion.query(sql, (err,rows, fields)=>{
        if(err) {
            console.log("error");
        }
        else{
                 res.json({status:"equipo Eliminado"})
              
               
                //console.log(rows);
            }
 
    });


});


//modificar
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, logo} = req.body

    let sql = `update tb_equipo set  nombre ='${nombre}',logo='${logo}'
                where id_equipo = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'equipo modificado'})
        }
    })

})




module.exports= router;
