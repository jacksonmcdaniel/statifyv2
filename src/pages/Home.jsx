import { useContext, useState } from "react";
import SpotifyAuthContext from "../hooks/SpotifyAuthContext";
import axios from "axios";

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  const { token, loginUrl, logout } = useContext(SpotifyAuthContext);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <img width={"100%"} src={artist.images[0].url} alt="" />
        ) : (
          <div>No Image</div>
        )}
        {artist.name}
      </div>
    ));
  };

  return (
    <div>
      <h1>Home</h1>
      {!token ? (
        <a href={loginUrl}>Login to Spotify</a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}

      <form onSubmit={searchArtists}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button type={"submit"}>Search</button>
      </form>

      {renderArtists()}
    </div>
  );
}
