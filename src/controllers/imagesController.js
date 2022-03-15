const path = require('path');
const fs = require('fs-extra');
const db = require('../../database/models');

const imagesController={
    async userImg(req,res){
         
        const img=req.params.image
        const pathImage=path.resolve(__dirname,`../../public/images/Users/${img}`)
        if(fs.existsSync(pathImage)){
            res.sendFile(pathImage)
        }
    },
    async productImg(req,res){
         
        const img=req.params.image
        const pathImage=path.resolve(__dirname,`../../public/images/Products/${img}`)
        if(fs.existsSync(pathImage)){
            res.sendFile(pathImage)
        }
    }


}
module.exports=imagesController