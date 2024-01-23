/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import styles, { layout } from "../../style";
import { close, logo, menu } from "../../assets";
import { Link } from "react-router-dom";

//icons
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { GiCash } from "react-icons/gi";
import { Notification } from "../dashboardComponents";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const Username = "eedga";
  return (
    // <nav className="w-full flex py-6 justify-between items-center navbar">
    //   <img src={logo} alt="breakApp_logo" className="w-[130px] h-[36px]" />

    //   <ul className="list-none sm:flex hidden justify-end items-center flex-1">
    //     <li
    //       className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
    //     >
    //       Menu
    //     </li>
    //     <li
    //       className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
    //     >
    //       Services
    //     </li>
    //     <li
    //       className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
    //     >
    //       Status
    //     </li>
    //     <li
    //       className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-0`}
    //     >
    //       <div className="flex w-[90px] p-2 gap-3 rounded h-[40px] bg-yellow">
    //         <FaUser className="w-[24px] h-[24px] text-black" />
    //         <span className="text-black">User</span>
    //       </div>
    //     </li>
    //   </ul>

    //   <div className="sm:hidden flex flex-1 justify-end items-center">
    //     <img
    //       src={toggle ? close : menu}
    //       alt="menu"
    //       className="w-[26px] h-[24px] object-contain"
    //       onClick={() => setToggle((prev) => !prev)}
    //     />

    //     <div
    //       className={`${
    //         toggle ? "flex" : "hidden"
    //       } p-6 bg-black-gradient absolute my-4 mx-2 top-20 right-0 rounded-xl min-w-[140px] sidebar`}
    //     >
    //       <ul className="list-nome flex flex-col justify-end items-center flex-1">
    //         <li
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
    //         >
    //           Menu
    //         </li>
    //         <li
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
    //         >
    //           Services
    //         </li>
    //         <li
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-4`}
    //         >
    //           Status
    //         </li>
    //         <li
    //           className={`font-poppins font-normal cursor-pointer text-[16px] text-white mb-0`}
    //         >
    //           <div className="flex w-[90px] h-[40px] p-2 gap-2 rounded bg-yellow text-black">
    //             <FaUser className="w-[24px] h-[24px]" />
    //             <span>User</span>
    //           </div>
    //         </li>
    //         ;
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <div className="surface-ground px-2 py-1 md:px-4 lg:px-6 ">
      <div className="grid">
        <div className="flex justify-between col-12">
          <div className="flex flex-col">
            <h5 className="text-blue-900">Hello, {Username}</h5>
            <p className="font-semibold text-blue-500 text-[12px]">
              {formattedDate}
            </p>
          </div>

          <div className="flex gap-4 items-center">
            <Link to="/home/user_account">
              <FaUser className="w-[20px] h-[20px] text-blue-500" />
            </Link>

            <Notification className="w-[20px] h-[20px]" />

            <Link to="/home/user_settings">
              <IoSettings className="w-[20px] h-[20px] text-blue-500" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-card shadow p-3 rounded">
            <div className="flex justify-between mb-3">
              <div>
                <span className="block text-secondary font-medium mb-3">
                  Orders
                </span>
                <div className="text-black font-medium text-xl">152</div>
              </div>
              <div
                className="flex items-center justify-center bg-yellow rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-shopping-cart text-blue-500 text-xl"></i>
              </div>
            </div>
            <span className="text-success font-medium">24 new </span>
            <span className="text-secondary">since last visit</span>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-card shadow p-3 rounded">
            <div className="flex justify-between mb-3">
              <div>
                <span className="block text-secondary font-medium mb-3">
                  Budget
                </span>
                <div className="text-black font-medium text-xl">$2.100</div>
              </div>
              <div
                className="flex items-center justify-center bg-yellow rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-map-marker text-orange-500 text-xl"></i>
              </div>
            </div>
            <span className="text-success font-medium">%52+ </span>
            <span className="text-secondary">since last week</span>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-card shadow p-3 rounded">
            <div className="flex justify-between mb-3">
              <div>
                <span className="block text-secondary font-medium mb-3">
                  Users
                </span>
                <div className="text-black font-medium text-xl">28441</div>
              </div>
              <div
                className="flex items-center justify-center bg-yellow rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <i className="pi pi-inbox text-cyan-500 text-xl"></i>
              </div>
            </div>
            <span className="text-success font-medium">520 </span>
            <span className="text-secondary">newly registered</span>
          </div>
        </div>

        <div className="col-12 md:col-6 lg:col-3">
          <div className="surface-card shadow p-3 rounded">
            <div className="flex justify-between mb-3">
              <div>
                <span className="block text-secondary font-medium mb-3">
                  Debts
                </span>
                <div className="text-black font-medium text-xl">152 Unread</div>
              </div>
              <div
                className="flex items-center justify-center bg-yellow rounded"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                {/* <i className="pi pi-cash text-purple-500 text-xl"></i> */}
                <GiCash className="text-xl" />
              </div>
            </div>
            <span className="text-success font-medium">85 </span>
            <span className="text-secondary">responded</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
