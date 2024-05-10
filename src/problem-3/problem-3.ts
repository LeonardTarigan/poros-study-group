/* 
  - modify the function to return an order message
  - name input is a string
  - size input must be "LARGE", "MEDIUM", or "SMALL"
  - amount input is optional, the default value is 1
  - return the message with this format: 'New order: 2x SMALL Matcha Latte' if the name input is in the database
  - return 'Drink not found' if the name input is not in the database
  - return 'The amount must be at least 1' if the amount input <= 0
*/

const drinkDatabase = ["Matcha Latte", "Black Tea", "Fruit Punch"];

const orderDrink = (name, size, amount) => {
  return;
};

export default orderDrink;
