const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

  // start the server

var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started on port 3000'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

app.post('/displayInfo', (req, res) => {
    var name = req.body.name;
    var email = req.body.email;

    context = {
      name: name,
      email: email
    }

    res.render('display', context);
})