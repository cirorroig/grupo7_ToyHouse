module.exports=(sequelize,dataTypes)=>{
    let alias="Edad"

    let cols={
        id_edad:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        range:{
            type:dataTypes.STRING(45),
            allowNull: false,
        }

    }

    let config = {
        tableName:"edades",
        timestamps:false,
    }

    let Edad =sequelize.define(alias,cols,config)

    Edad.associate = function(models){
        Edad.hasMany(models.Producto,{
            as:"productos",
            foreignKey:"id_edad"
        })
    }

    return Edad;
}