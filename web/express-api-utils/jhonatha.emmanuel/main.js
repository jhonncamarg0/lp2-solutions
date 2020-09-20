const express = require('express');
const app = express();
app.use(express.json());

app.post('/util/text/:action', (req, res) => {
    const action = req.params.action;
    if(action === "lowercase"){
        const { input } = req.body;
        const output = toLowerCase(input)
        res.send(output);

        const response = {
            action,
            input: "teste",
            output,
        }
        res.json(response);
        }
    else if(action === "uppercase"){
        const { input } = req.body;
        const output = toUpperCase(input)
        res.send(output);

        const response = {
            action,
            input: "teste",
            output,
        }
        res.json(response);
        }
});

app.get('/util/number/:action/:number', (req, res) => {
    const action = req.params.action;
    if(action === "minimum"){
        const input = parseInt(req.query.number);
        const output = Math.min(input);
        res.send(output);

        const response = {
            action,
            input,
            output,
        }
        res.json(response);
    }
    else if(action === "maximum"){
        const input = parseInt(req.query.number);
        const output = Math.max(input);
        res.send(output);

        const response = {
            action,
            input,
            output,
        }
        res.json(response);
    }
});
app.listen((8080), () => {console.log("Running at 8080")});