import express from "express";
import mysql from 'mysql2/promise';
import cors from 'cors';

// Creando nuestro servidor
const app = express();

// Usar cors
app.use(cors());

// Configuraciones adicionales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Conexión a la base de datos
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'usuario',
});

// Agregamos una consulta básica
app.get('/', (req, res) => res.send("hey esto sí funciona"));

app.get('/login', async (req, res) => {
    const datos = req.query;
    try {
        const [results, fields] = await pool.query(
            "SELECT * FROM `usuario` WHERE `usuario` = ? AND `contraseña` = ?",
            [datos.usuario, datos.contraseña]
        );
        if (results.length > 0) {
            res.status(200).send("Inicio de sesión correcto");
        } else {
            res.status(401).send("No inició sesión");
        }
        
        console.log(results); // results contiene las filas devueltas por el servidor
        console.log(fields); // fields contiene información meta adicional sobre los resultados, si está disponible
    } catch (err) {
        console.error(err);
        res.status(500).send("Error en el servidor");
    }
    console.log(datos);
});

// Imprimir en consola
app.listen(3000, () => {
    console.log("Servidor funcionando en el puerto 3000");
});
