import { createConnection } from "mysql";

const db= createConnection({
    host:"localhost",
    user: "root",
    password:"",
    database: "usuarios"
});

//mensade de conexión

db.connect((err)=>{
    if(err){
        console.error("no conectado a la base de datos",err);
        return
    }
    console.log("conexión exitosa")
})

//consultar a la base de datos

db.query("SELECT * FROM usuarios",(err, rows)=>{
    if(err){
        console.error("error en la consulta",err);
        return
    }
    console.log("los resultados de la consulta")
    console.log (rows)
})

//llamar a la base de datos node base.js