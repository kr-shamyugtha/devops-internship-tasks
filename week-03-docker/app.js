const express = require("express");

const app = express();

app.use(express.static("public"));

const menu = {
  starters: [
    { name: "Veg Spring Rolls", price: 120 },
    { name: "Paneer Tikka", price: 180 },
    { name: "Garlic Bread", price: 100 }
  ],

  maincourse: [
    { name: "Veg Biryani", price: 220 },
    { name: "Paneer Butter Masala", price: 240 },
    { name: "Fried Rice", price: 190 }
  ],

  drinks: [
    { name: "Coffee", price: 80 },
    { name: "Tea", price: 50 },
    { name: "Mojito", price: 120 }
  ],

  desserts: [
    { name: "Brownie", price: 150 },
    { name: "Ice Cream", price: 100 },
    { name: "Cheesecake", price: 180 }
  ]
};

app.get("/api/starters", (req, res) => {
  res.json(menu.starters);
});

app.get("/api/maincourse", (req, res) => {
  res.json(menu.maincourse);
});

app.get("/api/drinks", (req, res) => {
  res.json(menu.drinks);
});

app.get("/api/desserts", (req, res) => {
  res.json(menu.desserts);
});

app.listen(3000, () => {
  console.log("Cafe Menu Server running on port 3000");
});