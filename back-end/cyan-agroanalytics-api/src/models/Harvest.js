const Model = require('sequelize').Model
const DataTypes = require('sequelize').DataTypes

class Harvest extends Model {

    static init(sequelize) {
        super.init({
            code: DataTypes.INTEGER,
            initial_date: DataTypes.DATE,
            end_date: DataTypes.DATE,
            mills_id: DataTypes.INTEGER
        }, {
            sequelize
        })
    }
}

module.exports = Harvest