const express = require('express');
const {lowcasex,upcasex} = require('./text');
const app = express();
app.use(express.json());
const port = 8080;

app.post('/lowercase',(req, res) => {
    const action = "lowercase";
    const {dados} = res.body;
    const result = {
        action,
        input: dados,
        output: lowcasex(dados),
    }
    console.log(result);
    res.json(result);
})

app.post('/uppercase'),(req, res) => {
    const action = "uppercase";
    const {dados} = req.body;
    const result = {
        action,
        input: dados,
        output: upcasex(dados),
    }
    res.json(result);
})

app.listen(port, () => {console.log("Running at 8080")});