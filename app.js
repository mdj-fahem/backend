const express = require('express')
const app = express()

var Message = function(userId, id, body, title,date) {
    this.userId = userId;
    this.id = id;
    this.title= title;
    this.body = body;
    this.date = date;
}

app.get('/', function(req, res) {
    var messages = [];
    messages.push(new Message(1,1, "backend", "Massi","13/12/2018 18:41:36"));
    messages.push(new Message(1,2, "frontend","fahem","16/12/2018 18:41:36"));

    res.send(JSON.stringify(messages));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})
