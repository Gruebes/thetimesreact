var express = require("express");

var articleController = require("../controllers/articleController");

var router = new express.Router();

// Get all article (or optionally a specific quote with an id)
// router.get("/article/:id?", articleController.index);
// Create a new quote using data passed in req.body
router.post("/article", articleController.create);
// Update an existing quote with a speicified id param, using data in req.body
router.patch("/article/:id", articleController.update);
// Delete a specific quote using the id in req.params.id
router.delete("/article/:id", articleController.destroy);

module.exports = router;
