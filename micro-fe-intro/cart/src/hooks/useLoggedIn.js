import { useEffect, useState } from "react";
import { jwt } from "../utils/cart";

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    setLoggedIn(!!jwt.value);
    return jwt.subscribe( (_) => {
      setLoggedIn(!!jwt.value);
    })
  }, []);
  return loggedIn;
}
