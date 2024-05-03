import express from 'express';

import {User} from './user.js';


app.use(express.json());


app.post('/User',(req,res) => {

    const {name,email, password } = req.body;
   let id = User.length + 1;

    const newUser = {
        id,
        name,
        email,
        password
    }
    User.push(newUser);

    let newUsers = User;

    let UserString = JSON.stringify(newUser);

    fs.writeFileSync('./data.js',`export let students = ${UserStringString}`);
    return res.json(newUser)


})

app.put('/User/:id', (res,req) =>{
    const {id} = req.params
    const {name, email, password} = req.body
    const Users = User.find((User) => User.id === parseInt(id));

    if (!User){
        return res.status(404).json({error : 'user not found'});
    }
    return res.json(User);
    User.name = name;
    User.email = email;
    User.password = password;

    let newUsers = User;
    let UserString = JSON.stringify(newusers);

    fs.writeFileSync('./data.js',`export let students = ${UserString}`);
    return res.json(newUsers);


})