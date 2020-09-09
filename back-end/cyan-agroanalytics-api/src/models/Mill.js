const Model = require('sequelize').Model
const DataTypes = require('sequelize').DataTypes

class Mill extends Model {

    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            harvests: DataTypes.INTEGER 
        }, {
            sequelize
        })
    }
}

module.exports = Mill