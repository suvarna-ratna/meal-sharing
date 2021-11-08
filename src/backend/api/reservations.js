const express = require("express");
const router = express.Router();
const knex = require("../database");
//Returns all reservations
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservations = await knex("reservation");
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});
//Adds a new reservation
router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservations = await knex("reservation").insert(request.body);
    response.send("it added");
  } catch (error) {
    throw error;
  }
});
//Returns reservation by id
router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservations = await knex("reservation").where(
      "id",
      parseInt(request.params.id)
    );
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});
//Updates the reservation by id
router.put("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservations = await knex("reservation")
      .where("id", parseInt(request.params.id))
      .update(request.body);
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});
//Deletes the reservation by id
router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const reservations = await knex("reservation")
      .where("id", parseInt(request.params.id))
      .del();
    response.json(reservations);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
