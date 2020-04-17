const express = require("express");

const carsRouter = require("./cars/router.js");

const server = express();

server.use(express.json());

// console.log(carsRouter);

server.use("/api/cars", carsRouter);

server.use("/api/test", (req, res) => {
	console.log("hey works!");
	res.json({ message: "works" });
});

const port = process.env.PORT || 5000;

server.listen(port, () => console.log("running on " + port));
