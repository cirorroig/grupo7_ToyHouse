module.exports=(sequelize,dataTypes)=>{
    let alias="Categoria"

    let cols={
        id_categoria:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        categoria:{
            type:dataTypes.STRING(45),
            allowNull: false,
        }

    }

    let config = {
        tableName:"edades",
        timeStamps:false,
    }

    let Categoria =sequelize.define(alias,cols,config)

    Categoria.associate = function(models){
        Categoria.hasMany(models.Producto,{
            as:"productos",
            foreignKey:"id_categoria"
        })
    }

    return Categoria;
}