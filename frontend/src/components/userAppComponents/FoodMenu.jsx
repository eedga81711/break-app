/* eslint-disable no-unused-vars */
import React from "react";
import { cards } from "../../constants";
import {} from "../../assets";
import Card from "./Card";

const FoodMenu = () => {
  return (
    <div className="surface-ground px-2 py-1 md:px-4 lg:px-6 ">
      <div className="grid">
        <h3>Snacks Available</h3>
      </div>

      <div className="grid cards">
        {cards.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
