import { Sequelize } from "sequelize";

class Database {
    constructor(db) {
        this.db = db;
    }

    init() {
        this.db
            .authenticate()
            .then(() => console.log("Conectado com sucesso!"))
            .catch((error) => console.error("Falha ao conectar!", error));
    }

    close() {
        this.db
            .close()
            .then(() => console.log("Conecxao encerrada com sucesso!"))
            .catch((error) =>
                console.error("Falha ao encerrar conexão!", error)
            );
    }

    getConnection() {
        return this.db;
    }
}

const sequelize = new Sequelize("tcc", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default new Database(sequelize);
