import React, { useState } from "react";
import { useLoggedIn } from "../hooks/useLoggedIn";
import { login } from "../utils/cart";

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;
console.log(showLogin);
  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl cursor-pointer" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800"
          style={{
            width: "300px",
            top: "2rem",
            zIndex: "100",
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />
          <button
            className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};
export default Login;
