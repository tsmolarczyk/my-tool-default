import { useEffect, useState } from "react";

const useFetch = (url: any) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((json) => setData(json));
    console.log("zasetowano");
  }, [url]);
  return { data };
};

export default useFetch;
