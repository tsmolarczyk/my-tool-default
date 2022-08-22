// TODO: *** 1) WYSWIETLANIE IMION Z WLASNEJ BAZY DANYCH; 2) DODAWANIE KOLEJNYCH IMION PRZY POMOCY INPUTA; 3) USUWANIE 4) DODAWANIE WYBRANEGO DO CONTEXTU ***

import React, { useCallback, useEffect, useState, useContext } from "react";

import { NameContext } from "Providers/NameContext";
interface Person {
  id: number;
  name: string;
}

export const ThirdPage: React.FC = () => {
  const { addName } = useContext(NameContext);

  const [newName, setNewName] = useState<Person>();

  const [names, setNames] = useState<any>([
    { id: "0", name: "Janek" },
    { id: "0", name: "Andrzej" },
    { id: "0", name: "Tomek" },
  ]);

  const deleteName = (index: any, e: any) => {
    console.log(e);
    setNames(names.filter((el: any, i: any) => i !== index));
    console.log(names);
  };

  useEffect(() => {
    console.log(names);
  }, [names]);

  const handleNewName = useCallback((e: any) => {
    const newName = {
      id: Math.random(),
      name: e.target.value,
    };
    setNewName(newName);
  }, []);

  const addNewName = useCallback(
    (e: any) => {
      setNames([...names, newName]);
    },
    [newName, names]
  );

  const addToContext = (value: any) => {
    console.log(value);
    addName(names.index);
  };

  return (
    <>
      <input onChange={handleNewName} placeholder='Podaj imie' />
      <button onClick={addNewName}>Add person</button>
      <div>
        <h1>Names:</h1>
        {/* MAPOWANIE OD RAZU W KOMPONENCIE!! */}
        <ol
          style={{
            marginLeft: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {names.map((persona: any, index: any) => (
            <>
              <li>{persona.name}</li>
              <button onClick={(e) => deleteName(index, e)}>Delete</button>
              <button
                onClick={(e) => {
                  addToContext(e);
                }}
              >
                Add to context
              </button>
            </>
          ))}
        </ol>
      </div>
    </>
  );
};
