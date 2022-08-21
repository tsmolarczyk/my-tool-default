import { useMemo } from "react";
import useFetch from "./useFetch";

export const FourthPage = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/albums/");

  const displayAlbums = useMemo(() => {
    if (data) {
      return data.map((album: any) => <p>{album.title}</p>);
    }
    return <h1>Loading ...</h1>;
  }, [data]);

  return (
    <>
      <h1>ALBUMY:</h1>
      {displayAlbums}
    </>
  );
};
