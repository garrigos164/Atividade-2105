const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (request, response) => {
    let resultado = [];
    let n = 20; 
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        resultado.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    response.render('home', { valores: resultado });
});

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});
