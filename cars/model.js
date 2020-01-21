const DB = require("../data/db-config");

const getAll = () => {
	return DB("cars");
};

const insert = () => {
	return DB("cars");
};

module.exports = {
	getAll
};
