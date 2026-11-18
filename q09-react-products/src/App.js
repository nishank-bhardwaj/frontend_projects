import React from "react";
import ProductList from "./ProductList";
import "./App.css";

const catalog = [
  { id: 1, title: "Notebook Pack", about: "Set of 5 ruled notebooks", cost: 350 },
  { id: 2, title: "Study Lamp", about: "LED desk lamp, 3 brightness levels", cost: 899 },
  { id: 3, title: "USB Hub", about: "4-port USB 3.0 hub", cost: 499 },
  { id: 4, title: "Backpack", about: "Water-resistant, 30L", cost: 1799 },
  { id: 5, title: "Pen Set", about: "Gel pens, pack of 10", cost: 120 }
];

function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <ProductList items={catalog} />
      {/* To test the empty state, use: <ProductList items={[]} /> */}
    </div>
  );
}

export default App;
