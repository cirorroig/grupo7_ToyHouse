const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, '../data/users.json');
let users = JSON.parse(fs.readFileSync(usersFile, 'utf-8'));

const usersController = {
    index: (req,res) => {
        res.render("index",{users})
    },
    login:(req,res)=>{
        res.render("login")
    },
    register:(req,res)=>{
        res.render("register")
    },

}