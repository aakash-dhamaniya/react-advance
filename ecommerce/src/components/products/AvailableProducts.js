import React from "react";
import ProductItem from "./ProductItem";
import "./AvailableProducts.css";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function AvailableProducts() {
  const producst = productsArr.map((item, key) => (
    <ProductItem
      key={key}
      title={item.title}
      price={item.price}
      image={item.imageUrl}
    />
  ));
  return (
    <div className="store">
      <div className="productContainer">{producst}</div>
    </div>
  );
}

export default AvailableProducts;
