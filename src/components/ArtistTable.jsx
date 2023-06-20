function ArtistTable({ artists }) {
  const renderTableRows = () => {
    return artists.map((artist) => {
      return (
        <tr key={artist.id}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            <div className="w-20 h-20 object-cover">
              {artist.images.length ? (
                <img src={artist.images[0].url} className="rounded-xl" />
              ) : (
                <div>No Image</div>
              )}
            </div>
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {artist.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {artist.followers.total}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {artist.popularity}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              image
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Followers
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Popularity
            </th>
          </tr>
        </thead>

        <tbody>{artists ? renderTableRows() : ""}</tbody>
      </table>
    </div>
  );
}

export default ArtistTable;
