const express = require("express");
const mysql = require("mysql2");
const cors = require("cors")

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "certamen_2"
})
// GET
app.get('/clients', (req,res) => {
    pool.query("select * from clients", (error,results) => {
        if(error){
            // no supe que poner aca
        } else{
            // no me aparece el status ni el message en el insomnia/postman??
            const response = {
                status: "success",
                message: "clientes retornados exitosamente",
                data: results
            };
            res.status(200).send(results);
        }
    })
})

// POST
app.post('/crear', (req,res) => {
    
    const {nombre, password} = req.body;
    // me falto encriptar la password :(
    pool.query(
                "insert into clientes (nombre, password) values (?,?,?)",
                [nombre, hash],
                (error, results) => {
                    if(error){
                        // no supe que poner aca
                    } else{
                        // no me aparece el status ni el message en el insomnia/postman??
                        const response = {
                            status: "success",
                            message: "cliente creado exitosamente",
                            data: results
                        };
                        res.status(200).send(results);
                    }
                }
            );
})

app.listen(
    PORT;
    () => console.log(`me conecte al puerto ${PORT}`)
)