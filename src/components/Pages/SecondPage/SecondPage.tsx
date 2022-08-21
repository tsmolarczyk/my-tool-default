// TODO: *** POBIERANIE DANYCH PRZY UZYCIU FETCH, PO NACISNIECIU BUTTONA

import React from "react";
import { useState } from "react";

export const SecondPage = () => {
  const [users, setUsers] = useState<any>();

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((persons) => persons.json())
      .then((json) => setUsers(json));
    console.log(users.name);
  };

  const displayUsers = () => {
    if (users) {
      return users.map((user: any) => <h3>{user.name}</h3>);
    }
  };

  return (
    <>
      <h1>Users names: </h1>
      <button onClick={getUsers}>GET USERS:</button>
      {displayUsers()}
      {/* pamietaj o wywolaniu () !! */}
    </>
  );
};
