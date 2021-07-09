const Joi = require("joi")
const express = require("express")

const app = express()

app.use(express.json())



app.get("/", (req, res) => {
    res.send("Welcome user");
}); //http://localhost:3000 


//CRUD 
var users = []

const user1 = {
    "userId": 1,
    "firstName": "ram",
    "email": "ram@gmail.com",
    "password": "ram"
}

const user2 = {
    "userId": 2,
    "firstName": "sita",
    "email": "sita@gmail.com",
    "password": "sita"
}

users.push(user1);
users.push(user2);




//HTTP get  -> /users --> read all users 
app.get("/api/users", (req, res) => {
    res.send(users);
})

//get user by id 
app.get("/api/users/:userId", (req, res) => {
    //req.params [url/9]
    //req.query [ url?userId=9] 
    //req.body  [ post | put ]

    let userId = parseInt(req.params.userId);

    let user = users.find(u => u.userId == userId)

    if (user) {
        res.send(user);
    } else {
        res.status(404).send("User Not found....");
    }
})



function validateUser(data){
    const UserSchema = {
        firstName: Joi.string().min(3).required()
    };
    return  Joi.validate(data, UserSchema)
}

//save user / insert 

app.post("/api/users", (req, res) => {
    // console.log(result);
    const result = validateUser(req.body)
    if (result.error) {
        res.status(400).send(result.error.details[0].message)
    } else {
        const user = {
            "userId": users.length + 1,
            "firstName": req.body.firstName,
            "email": req.body.email,
            "password": req.body.password
        }
        users.push(user);
        res.send(user);
    }

    // if(!req.body.firstName){
    //     res.status(400).send("FirstName is required")
    // }else if(req.body.firstName.length < 3){
    //     res.status(400).send("Min 3 char requried in FirstName");
    // }else{ 

    //     const user = {
    //         "userId":users.length+1,
    //         "firstName":req.body.firstName,
    //         "email":req.body.email,
    //         "password":req.body.password 
    //     }

    //     users.push(user);
    //     res.send(user);
    // }
})


app.put("/api/users/:userId", (req, res) => {




    let userId = parseInt(req.params.userId);
    let user = users.find(u => u.userId == userId)

    if (user) {
        const result = validateUser(req.body)
        if (result.error) {
            res.status(400).send(result.error.details[0].message)
        } else {
            user.firstName = req.body.firstName
            res.send(user);
        }

    } else {
        res.status(404).send("User Not found....");
    }







    // let userId = parseInt(req.params.userId);
    // let user = users.find(u => u.userId == userId)

    // if (user) {
    //     if (!req.body.firstName) {
    //         res.status(400).send("FirstName is required")
    //     } else if (req.body.firstName.length < 3) {
    //         res.status(400).send("Min 3 char requried in FirstName");
    //     } else {
    //         user.firstName = req.body.firstName
    //         res.send(user);
    //     }

    // } else {
    //     res.status(404).send("User Not found....");
    // }

})


app.delete("/api/users/:userId", (req, res) => {
    let userId = parseInt(req.params.userId)

    let user = users.find(u => u.userId == userId)

    if (user) {
        let index = users.indexOf(user)
        users.splice(index, 1)
        res.send(user);
    } else {
        res.status(404).send("User Not found....");
    }
})





//app-routing-moduel.ts 
//{path:"",component:LoginComponent}
//http://localhost:4200 



app.listen(3000, () => {
    console.log("server started on 3000.....")
})