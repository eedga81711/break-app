/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

//images imports

import { logo, odyssey_logo } from "../../assets";

//icon imports
import { TbClockQuestion } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { GiCash } from "react-icons/gi";

const Menu = () => {
  return (
    <div className={`menu h-full w-[250px] flex flex-col justify-between`}>
      <div className="items-center flex justify-center mt-4">
        <Link to="/Admin/Dashboard">
          <img src={logo} alt="app_logo" className="h-[35px]" />
        </Link>
      </div>

      <div className="flex flex-col justify-between gap-5 ">
        <div className={`rounded menuSpan`} id="active">
          <Link
            to="/Admin/Dashboard/order"
            className="flex justify-evenly w-full p-2"
          >
            <TbClockQuestion className="w-[24px] h-[24px] text-black" />
            <span className="text-black">Orders</span>
          </Link>
        </div>

        <div className={`rounded menuSpan`}>
          <Link
            to="/Admin/Dashboard/user"
            className="flex justify-evenly w-full p-2 "
          >
            <FaUsers className="w-[24px] h-[24px] text-black" />
            <span className="text-black">Users</span>
          </Link>
        </div>

        <div className={`rounded menuSpan`}>
          <Link
            to="/Admin/Dashboard/product"
            className="flex justify-evenly w-full p-2"
          >
            <IoFastFood className="w-[24px] h-[24px] text-black" />
            <span className="text-black">Food Menu</span>
          </Link>
        </div>

        <div className={`rounded menuSpan`}>
          <Link
            to="/Admin/Dashboard/finances"
            className="flex justify-evenly w-full p-2"
          >
            <GiCash className="w-[24px] h-[24px] text-black" />
            <span className="text-black">Finances</span>
          </Link>
        </div>
      </div>

      <div className="mb-4 sm:mb-2">
        <Link to="https://www.odysseytech.co/">
          <img src={odyssey_logo} alt="odyssey_logo" className={`h-[50px]`} />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
