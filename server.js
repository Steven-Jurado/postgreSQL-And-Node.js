const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const pool = require('./postgresql');


var app = express();


app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false}) )

app.use('/',router.get('/', async (req , res) => {
    const result = await pool.query('select * from cliente')
    res.status( 200 ).send({
        error: '',
        body: result.rows
    })
}));

app.use('/',router.post('/insert', async (req , res) => {
    const result = await pool.query(`insert into cliente values ('${req.body.cedula}','${req.body.nombre}','${req.body.apellido}')`)
    res.status( 200 ).send({
        error: '',
        body: result.rowCount
    })
}));

app.listen(3000);
console.log('http://localhost:3000')