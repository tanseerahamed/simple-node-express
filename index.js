const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.send('Hello from my first ever node. I am really excited as I am learning new things.New journey towards my dream')
});

const users = [
    {"id": 0, "name": "Tanseer", "email":"tanseer@gmail.com", "phone":"01555334455"},
    {"id": 1, "name": "Ikaram", "email":"tanseer@gmail.com", "phone":"015553344588"},
    {"id": 2, "name": "Borhan", "email":"tanseer@gmail.com", "phone":"01555334499"},
    {"id": 3, "name": "Mosharaf", "email":"tanseer@gmail.com", "phone":"01555334499"},
    {"id": 4, "name": "Kader", "email":"tanseer@gmail.com", "phone":"01555334499"}
]

app.get('/users', (req,res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    })

    // app.METHOD

    app.post('/users', (req,res) => {
        const newUser = req.body;
        newUser.id = users.length;
        users.push(newUser);

        console.log("hitting the post", req.body)
        //res.send(JSON.stringify(newUser))
        res.json(newUser)
        res.send("inside post")
    })

app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', 3000);
});