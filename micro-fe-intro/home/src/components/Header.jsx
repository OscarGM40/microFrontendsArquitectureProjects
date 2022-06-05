import React from "react";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <Link to="/">
          <div className="flex-grow">Fidget Spinner World changed</div>
        </Link>
        <Link to="/cart" id="cart">
          <div className="flex-grow">| Cart</div>
        </Link>
        <div className="flex-end relative">
          <MiniCart />
          <Login />
        </div>
      </div>
    </header>
  );
}
