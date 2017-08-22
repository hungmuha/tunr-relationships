//Connect
import * as Sequelize from 'sequelize';

var sequelize = new Sequelize('postgres://hungmuhamath@localhost:5432/tunr_relationships');

var Artist = sequelize.import("./artist");
var Manager = sequelize.import("./manager");
var Song = sequelize.import("./song");
var Ad = sequelize.import("./ad");

Song.belongsTo(Artist);
Artist.hasMany(Song);
Manager.hasMany(Artist);
Manager.hasOne(Ad);
Ad.belongsTo(Manager);

const db = <any>{};
db.models = {
	Artist,
	Manager,
	Song,
	Ad
};

//Export models and Sequelize for seed and dbSetup
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};