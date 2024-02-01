/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FiPlusCircle } from "react-icons/fi";

const Card = ({ title, id, price, img }) => {
  return (
    <div className="col-12 md:col-6 lg:col-4">
      <div className="card p-2 flex flex-col items-center justify-center rounded bg-white">
        <div className="card.img">
          <img src={img} alt={title} className="w-full" />
        </div>

        <div className="card.title">
          <h3 className="text-center font-semibold text-[16px]">{title}</h3>
        </div>

        <div className="card.price flex  justify-between">
          <span>Shs.{price}</span>
          <span>
            <FiPlusCircle className="text-xl text-black" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
