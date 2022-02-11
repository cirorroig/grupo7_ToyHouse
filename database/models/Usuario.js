module.exports=(sequelize,dataTypes)=>{
    let alias="Usuario"

    let cols={
        id_usuario:{
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull: false,
        },
        first_name:{
            type:dataTypes.STRING,
            allowNull: false,
        },
        last_name:{
            allowNull: false,
            type:dataTypes.STRING,
        },
        email:{
            allowNull: false,
            type:dataTypes.STRING(100),
        },
        password:{
            type:dataTypes.STRING(500),
            allowNull: false,
        },
        image:{
            type:dataTypes.STRING(100),
            allowNull: false,
        },
        is_admin:{
            type: dataTypes.INTEGER,
            allowNull: false,
        }

    }

    let config = {
        tableName:"usuarios",
        timestamps:false,
    }

    let Usuario =sequelize.define(alias,cols,config)

    return Usuario;
}