module.exports=(sequelize,dataTypes)=>{
    let alias="Talle"

    let cols={
        id_talle:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        talle:{
            type:dataTypes.STRING(5),
        }

    }

    let config = {
        tableName:"talles",
        timestamps:false,
    }

    let Talle =sequelize.define(alias,cols,config)

    Talle.associate = function(models){
        Talle.hasMany(models.Producto,{
            as:"productos",
            foreignKey:"id_talle"
        })
    }
    return Talle;
}