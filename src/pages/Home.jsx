import { useContext, useState } from "react";
import SpotifyAuthContext from "../hooks/SpotifyAuthContext";
import axios from "axios";
import ArtistTable from "../components/ArtistTable";

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  const { token } = useContext(SpotifyAuthContext);

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

  return (
    <div className="w-full h-auto bg-background text-text grid justify-center content-start grid-cols-1 gap-5">
      <h1>This is the Homepage</h1>
      <form onSubmit={searchArtists}>
        <input
          className="text-black"
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type={"submit"}>Search</button>
      </form>

      <ArtistTable artists={artists} />
    </div>
  );
}
