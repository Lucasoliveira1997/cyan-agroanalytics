const Model = require('sequelize').Model
const DataTypes = require('sequelize').DataTypes

class Field extends Model {

    static init(sequelize) {
        super.init({
            code: DataTypes.INTEGER,
            longitude: DataTypes.INTEGER,
            latitude: DataTypes.INTEGER,
            farms_id: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Field