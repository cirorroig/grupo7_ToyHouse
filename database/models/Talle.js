module.exports=(sequelize,dataTypes)=>{
    let alias="Talle"

    let cols={
        id_talle:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        talle:{
            type:dataTypes.STRING(5),
            allowNull: false,
        }

    }

    let config = {
        tableName:"talles",
        timeStamps:false,
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