import { useEffect, useState, createContext } from "react";

const SpotifyAuthContext = createContext();

// eslint-disable-next-line react/prop-types
const SpotifyAuthProvider = ({ children }) => {
  const CLIENT_ID = "0ed0fe41d8d748dab1cc488f434d3a9a";
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

  return (
    <SpotifyAuthContext.Provider value={{ token, loginUrl, logout }}>
      {children}
    </SpotifyAuthContext.Provider>
  );
};

export { SpotifyAuthProvider };
export default SpotifyAuthContext;
