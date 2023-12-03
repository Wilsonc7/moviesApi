const db = require("../database/models");
const { Op } = require("sequelize");

const getAllGenres = async () => {
    try {
        const genres = await db.Genre.findAll({
            order: [['name', 'ASC']]
        });
        return {
            genres,
            
        };
    } catch (error) {
        console.log(error);
        throw {
            status: error.status || 500,
            message: error.message || 'ERROR en servicio',
        };
    }
};

module.exports = {
    getAllGenres,
};
