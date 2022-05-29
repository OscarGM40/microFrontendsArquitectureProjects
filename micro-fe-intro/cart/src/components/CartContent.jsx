import React, { useEffect, useState } from "react";
import { jwt } from "../utils/cart";
import Login from "./Login";

const CartContent = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    return jwt.subscribe((newToken) => setToken(newToken || ""));
  }, []);

  return (
    <div>
      JWT:{token}
      <Login />
    </div>
  );
};
export default CartContent;
