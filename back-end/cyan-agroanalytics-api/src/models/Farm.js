const Model = require('sequelize').Model
const DataTypes = require('sequelize').DataTypes

class Farm extends Model {

    static init(sequelize) {
        super.init({
            code: DataTypes.INTEGER,
            name: DataTypes.STRING,
            fields: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Farm