import { useContext } from "react";
import AuthProvider from "../provider/AuthProvider";

function useAuth() {
  const auth = useContext(AuthProvider);
  return auth;
}

export default useAuth;
