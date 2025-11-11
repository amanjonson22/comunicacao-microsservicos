import { Sequelize } from "sequelize";
import sequel from "../../../config/db/dbConfig.js";

const User = sequel.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }},
    {}
);

export default User;