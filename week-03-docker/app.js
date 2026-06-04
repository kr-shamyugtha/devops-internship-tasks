const express = require("express");

const app = express();

app.use(express.static("public"));

const menu = {
  starters: [
    { name: "Mozzarella Sticks", price: 180 },
    { name: "Garlic Bread", price: 120 },
    { name: "Onion Rings", price: 150 },
    { name: "Chicken Wings", price: 220 },
    { name: "Nachos", price: 200 },
    { name: "Jalapeno Poppers", price: 190 },
    { name: "Stuffed Mushrooms", price: 210 },
    { name: "Caesar Salad", price: 180 },
    { name: "Chicken Nuggets", price: 170 },
    { name: "Bruschetta", price: 160 }
  ],

  soups: [
    { name: "Tomato Soup", price: 140 },
    { name: "Mushroom Soup", price: 160 },
    { name: "Chicken Noodle Soup", price: 180 },
    { name: "Pumpkin Soup", price: 170 },
    { name: "Broccoli Cheddar Soup", price: 190 },
    { name: "French Onion Soup", price: 200 },
    { name: "Corn Chowder", price: 180 },
    { name: "Vegetable Soup", price: 150 },
    { name: "Cream of Chicken Soup", price: 190 },
    { name: "Minestrone Soup", price: 180 }
  ],

  salads: [
    { name: "Greek Salad", price: 220 },
    { name: "Caesar Salad", price: 210 },
    { name: "Cobb Salad", price: 260 },
    { name: "Garden Salad", price: 180 },
    { name: "Chicken Salad", price: 250 },
    { name: "Tuna Salad", price: 270 },
    { name: "Pasta Salad", price: 230 },
    { name: "Avocado Salad", price: 240 },
    { name: "Waldorf Salad", price: 250 },
    { name: "Quinoa Salad", price: 280 }
  ],

  maincourse: [
    { name: "Margherita Pizza", price: 350 },
    { name: "Pepperoni Pizza", price: 420 },
    { name: "Spaghetti Bolognese", price: 380 },
    { name: "Fettuccine Alfredo", price: 360 },
    { name: "Grilled Chicken Steak", price: 450 },
    { name: "Beef Burger", price: 340 },
    { name: "Chicken Burger", price: 320 },
    { name: "Fish and Chips", price: 400 },
    { name: "Lasagna", price: 390 },
    { name: "Mac and Cheese", price: 280 }
  ],

  sides: [
    { name: "French Fries", price: 120 },
    { name: "Mashed Potatoes", price: 140 },
    { name: "Coleslaw", price: 100 },
    { name: "Garlic Breadsticks", price: 130 },
    { name: "Steamed Vegetables", price: 150 },
    { name: "Potato Wedges", price: 160 },
    { name: "Macaroni Salad", price: 140 },
    { name: "Corn on the Cob", price: 120 },
    { name: "Baked Beans", price: 130 },
    { name: "Cheese Fries", price: 180 }
  ],

  desserts: [
    { name: "Chocolate Brownie", price: 180 },
    { name: "Cheesecake", price: 220 },
    { name: "Ice Cream Sundae", price: 160 },
    { name: "Apple Pie", price: 200 },
    { name: "Tiramisu", price: 250 },
    { name: "Chocolate Lava Cake", price: 240 },
    { name: "Donuts", price: 150 },
    { name: "Waffles", price: 210 },
    { name: "Pancakes", price: 190 },
    { name: "Banana Split", price: 230 }
  ],

  drinks: [
    { name: "Coca Cola", price: 80 },
    { name: "Lemonade", price: 100 },
    { name: "Orange Juice", price: 120 },
    { name: "Iced Tea", price: 110 },
    { name: "Mojito", price: 150 },
    { name: "Milkshake", price: 180 },
    { name: "Hot Chocolate", price: 140 },
    { name: "Cappuccino", price: 130 },
    { name: "Espresso", price: 120 },
    { name: "Strawberry Smoothie", price: 190 }
  ]
};

app.get("/api/starters", (req, res) => res.json(menu.starters));
app.get("/api/soups", (req, res) => res.json(menu.soups));
app.get("/api/salads", (req, res) => res.json(menu.salads));
app.get("/api/maincourse", (req, res) => res.json(menu.maincourse));
app.get("/api/sides", (req, res) => res.json(menu.sides));
app.get("/api/desserts", (req, res) => res.json(menu.desserts));
app.get("/api/drinks", (req, res) => res.json(menu.drinks));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Cafe Menu Server running on port ${PORT}`);
});