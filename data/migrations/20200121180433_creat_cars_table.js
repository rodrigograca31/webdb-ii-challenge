exports.up = function(knex) {
	return knex.schema.createTable("cars", table => {
		table.increments(); // create column named "id", primary key, auto-incrementing
		table
			.string("vin", 17)
			.unique()
			.notNullable();

		table.text("make").notNullable();
		table.text("model").notNullable();
		table
			.integer("mileage")
			.unsigned()
			.notNullable();
		table.text("transmission_type");
		table.text("title_status");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("cars");
};
