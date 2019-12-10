const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const wolfRouter = require('./routes/wolf');

// 1. Разбивайте роутеры по файлам
// 2. Для прокидывания клиентской логики используйте static
// 3. Для отправки формы обычным способом используйте bodyParser
// 4. Данные выносите в модель


app.use(express.static('public'));

hbs.registerHelper('log', function (x) {
    return JSON.stringify(x);
});

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(indexRouter);
app.use(wolfRouter);

app.post('/submit', (req, res) => {
    res.send(req.body.wolf);
});

app.listen(process.env.PORT || 3000);
