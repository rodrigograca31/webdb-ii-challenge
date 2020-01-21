const express = require("express");
const router = express.Router();

const Cars = require("./model");

router.get("/", (req, res) => {
	Cars.getAll()
		.then(result => {
			if (result) {
				res.json(result);
			} else {
				res.json({});
			}
		})
		.catch(err => {
			res.status(500).json({ message: "error" });
		});
});

module.exports = router;
