import { DataTypes, Model } from "sequelize";
import Database from "../config/Database";

const connection = Database.getConnection();

class Food extends Model {}

Food.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        medida: {
            type: DataTypes.STRING,
        },
        proteinaAnimal: {
            type: DataTypes.DECIMAL(10, 1),
        },
        proteinaVegetal: {
            type: DataTypes.DECIMAL(10, 1),
        },
        carboidrato: {
            type: DataTypes.DECIMAL(10, 1),
        },
        gordura: {
            type: DataTypes.DECIMAL(10, 1),
        },
        fonte: {
            type: DataTypes.STRING,
        },
        recomendado: {
            type: DataTypes.BOOLEAN,
        },
        idCategoria: {
            type: DataTypes.BIGINT,
        },
    },
    {
        sequelize: connection, // We need to pass the connection instance
        modelName: "Food", // We need to choose the model name
        tableName: "food",
        timestamps: false,
    }
);

Food.sync()
    .then(() => console.log("Model 'Food' sincronizado com sucesso!"))
    .catch((error) =>
        console.error("Falha ao sincronizar o model 'Food'!", error)
    );

export default Food;
