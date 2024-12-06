import { useEffect, useState } from "react";
import { getCurrentUser } from "../api/authApi";

function Home() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    major: "",
  });
  const [error, setError] = useState(null); // State to store error message

  useEffect(() => {
    getCurrentUser(setUserData, setError);
  }, []);

  return (
    <div className="text-[#F1F1F1]">
      {error ? (
        <p className="text-red-500">{error}</p> // Display error message
      ) : (
        <>
          <p>{userData.username}</p>
          <p>{userData.email}</p>
          <p>{userData.major}</p>
        </>
      )}
    </div>
  );
}

export default Home;
