const express = require("express");
const { prependListener } = require("../database");
const router = express.Router();
const knex = require("../database");

//Returns all meals
router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//Returns all meal titles
router.get("/titles", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("meal").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

//Adds a new meal
router.post("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("meal").insert(request.body);
    response.send("it added");
  } catch (error) {
    throw error;
  }
});

//Returns meal by id
router.get("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("meal").where("id", parseInt(request.params.id));
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

//Updates the meal by id
router.put("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("meal")
      .where("id", parseInt(request.params.id))
      .update(request.body);
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

//Deletes the meal by id
router.delete("/:id", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const meals = await knex("meal")
      .where("id", parseInt(request.params.id))
      .del();
    response.json(meals);
  } catch (error) {
    throw error;
  }
});

//query params
router.get("/", async (request, response) => {
  const query = request.query;
  console.log(request.query);
  if (Object.keys(query).length == 0) {
    const meals = await knex("meal");
    return response.json(meals);
  }
  if (
    request.query.maxPrice &&
    !isNaN(parseInt(request.query.maxPrice)) &&
    request.query.limit
  ) {
    const meals = await knex("meal")
      .where("price", "<=", parseInt(request.query.maxPrice))
      .limit(parseInt(request.query.limit));
    return response.json(meals);
  }
  if (request.query.maxPrice && !isNaN(parseInt(request.query.maxPrice))) {
    const meals = await knex("meal").where(
      "price",
      "<=",
      parseInt(request.query.maxPrice)
    );
    return response.json(meals);
  } else if (request.query.title) {
    const meals = await knex("meal").where(
      "title",
      "like",
      `%${request.query.title}%`
    );
    return response.json(meals);
  } else if (
    request.query.createdAfter &&
    isNaN(Date.parse(request.query.createdAfter))
  ) {
    const meals = await knex("meal").where(
      "created_date",
      ">",
      request.query.createdAfter
    );
    return response.json(meals);
  } else if (request.query.limit) {
    const meals = await knex("meal").limit(parseInt(request.query.limit));
    return response.json(meals);
  } else if (request.query.availableReservations) {
    const meals = await knex("meal")
      .join("Reservation", { "meal.id": "Reservation.meal_id" })
      .select(
        "meal.id",
        "meal.title",
        "meal.when",
        "meal.max_reservations  as Total_reservations",
        knex.raw(
          'meal.max_reservations - sum(Reservation.number_of_guests) as "No_of_available_reservations"'
        )
      )
      .sum("Reservation.number_of_guests as reservations_booked")
      .having(
        "meal.max_reservations",
        ">",
        "sum('Reservation.number_of_guests')"
      )
      .groupBy("Reservation.meal_id");
    return response.json(meals);
  } else {
    return response.status(404).send("Given query does not find any data");
  }
});

module.exports = router;
