import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Home() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    major: "",
  });
  useEffect(() => {
    const token = Cookies.get("jwt");
    axios
      .get(import.meta.env.VITE_SERVER_URL + "/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData({
          username: res.data.username,
          email: res.data.email,
          major: res.data.major,
        });
        console.log(res.data);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="text-white">
      <p>{userData.username}</p>
      <p>{userData.email}</p>
      <p>{userData.major}</p>
    </div>
  );
}

export default Home;
