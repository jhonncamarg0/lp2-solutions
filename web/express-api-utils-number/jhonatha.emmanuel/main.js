const {maxx,minx} = require('./number');
const express = require('express');
const app = express();
const port = 8080;

app.get('./minimum',(req,res) => {
    let input = req.query.input;
    input = input.split(',');
    const action = "minimum";
    let valores = [];
    for(let i = 0; i <= input.length -1; i++){
        valores.push(parseInt(input[i]))
    }
    const result = {
        action,
        input: valores,
        minimum: minx(valores),
    }
    console.log(result);
    res.json(result);
})
app.get('./maximum',(req,res) => {
    let input = req.query.input;
    input = input.split(',');
    let valores = [];
    const action = "maximum";
    for(let i = 0; i <= input.length -1; i++){
        valores.push(parseInt(input[i]));
    }
    const result = {
        action,
        input: valores,
        output: maxx(valores)
    }
    res.json(result);
})

app.listen(port, () => {console.log('Running at port 8080')})