import { signinSchema } from "./signin.schema.js";
import { User } from "./user.js";


export const signin= (req, res) => {

    const {error, value} = signinSchema.validate(req.body);

    if (error) {
        return res.status(400).json({error: error.message});
    }

    const {name, email, password} = value;

    const userExists = User.find((user) => user.email === email);

    if(userExists){
        return res.status(409).json({error: 'User already exists'});
    }

    const newUser = {
        id: User.length + 1,
        name,
        email,
        password
    }
    User.push(newUser);

    let newUsers = User;

    let UserString = JSON.stringify(newUser);

    fs.writeFileSync('./models/user.js',`export let User = ${UserString}`);

    return res.status(201).findjson({
        message: 'User created sucessfully'
    })
}