import { useSelector } from "react-redux";

const isAuth = () => {
  return useSelector((state) => state.isAuth);
};

export default isAuth ;
