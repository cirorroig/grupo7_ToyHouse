module.exports=(sequelize,dataTypes)=>{
    let alias="Producto"

    let cols={
        id_producto:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        name:{
            type:dataTypes.STRING(300),
            allowNull: false,
        },
        description:{
            allowNull: false,
            type:dataTypes.TEXT,
        },
        detailedDescription:{
            allowNull: false,
            type:dataTypes.TEXT,
        },
        price:{
            type:dataTypes.DECIMAL,
            allowNull: false,
        },
        image:{
            type:dataTypes.STRING,
         
        },
        id_categoria:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        id_talle:{
            type: dataTypes.INTEGER,
            
        },
        id_edad:{
            type: dataTypes.INTEGER,
            allowNull: false,
        }

    }

    let config = {
        tableName:"productos",
        timestamps:false,
    }

    let Producto =sequelize.define(alias,cols,config)

    Producto.associate = function(models){
        Producto.belongsTo(models.Categoria,{
            as:"categoria",
            foreignKey:"id_categoria"
        })
        Producto.belongsTo(models.Talle,{
            as:"talle",
            foreignKey:"id_talle"
        })
        Producto.belongsTo(models.Edad,{
            as:"edad",
            foreignKey:"id_edad"
        })
    }
    
    return Producto;
}