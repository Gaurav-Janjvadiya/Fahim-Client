import { useSelector } from "react-redux";

const isAuth = () => {
  return useSelector((state) => state.auth.isAuth);
};

export default isAuth ;
