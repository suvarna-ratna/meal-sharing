import React from 'react';

const AddMeal = () => {
    return (
      <div className="addmeal">
          <h1>Create Your Meal</h1>
          <form>
  <label for="title">Meal Title:</label>
  <input type="text" id="title" name="title" value="Meal title"/><br/>
  <label for="description">Description:</label>
  <input type="text" id="description" name="description" value="Description"/><br/>
  <label for="location">Location:</label>
  <input type="text" id="location" name="location" value="Location"/><br/>
  <label for="max_reservations">Maximum Reservations:</label>
  <input type="text" id="max_reservations" name="max_reservations" value="Maximum reservations"/><br/>
  <label for="when">When:</label>
  <input type="date" id="when" name="when" value="when" min=""/><br/>
  <label for="price">Price:</label>
  <input type="text" id="price" name="price" value="Price"/><br/>
  <input type="submit" value="Add Meal"/>
</form>
          </div>
    );
};

  
  

export default AddMeal;
