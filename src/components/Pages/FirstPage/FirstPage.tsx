// TODO: *** POBIERANIE DANYCH PRZY POMOCY AXIOS ***

import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useMemo } from "react";

import { Context } from "Providers/ContextProvider";
import { useContext } from "react";

export const FirstPage = () => {
  const [titles, setTitles] = useState<any>();
  const { users } = useContext(Context);

  const getTitles = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => setTitles(res.data));
  };

  useEffect(() => {
    getTitles();
  }, []);

  const displayTitles = useMemo(() => {
    if (titles) {
      return titles.map((title: any) => <p>{title.title}</p>);
    }
    return <h1>Loading ...</h1>;
  }, [titles]);

  return (
    <>
      {users}
      <h1>Titles:</h1>
      {displayTitles}
    </>
  );
};
