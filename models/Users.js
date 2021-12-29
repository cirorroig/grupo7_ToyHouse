const fs = require('fs');
const User={
    filename:"./src/data/users.json",
    generateId:function(){
        let allUsers=this.findAll();
        let lastUser= allUsers.pop();
        if(lastUser){
            return lastUser.id + 1
        }
        return 1;
    },
    getData: function(){
        return JSON.parse(fs.readFileSync(this.filename,"utf-8"))
    },
    findAll:function(){
        return this.getData();
    },
    findByPk:function(id){
        let allUsers=this.findAll();
        let userFound = allUsers.find(user => user.id === id)
        return userFound
    },
    findByField:function(field,text){
        let allUsers=this.findAll();
        let userFound = allUsers.find(user => user[field] === text)
        return userFound
    },
    register:function(userData){
        let allUsers=this.findAll();
        let newUser={
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filename,JSON.stringify(allUsers,null, " "))
        return newUser
    },
    deleteUser:function(){
        let allUsers=this.findAll();
        let finalUsers = allUsers.filter(user => user.id !== id)
        fs.writeFileSync(this.filename,JSON.stringify(finalUsers,null, " "))
        return true;
    }
}

module.exports = User