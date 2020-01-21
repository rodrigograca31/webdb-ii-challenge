exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("cars")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("cars").insert([
				{
					id: 1,
					vin: "12345678901234567",
					make: "abc",
					model: "def",
					mileage: 2
				}
			]);
		});
};
