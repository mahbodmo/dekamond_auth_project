import { useSelector } from "react-redux";
import { RootState } from "../store/main";

export function useAuth() {
  const authSlice = useSelector((store: RootState) => store.auth);
  const access_token = authSlice.access_token;
  const user = authSlice.user;

  return {
    user,
    access_token,
    isAuth: !!access_token,
  };
}
