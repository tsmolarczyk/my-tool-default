import { createContext, useState } from "react";

export const NameContext = createContext<any>(null);

export const NameContextProvider: React.FC<any> = ({ children }) => {
  const [name, setName] = useState<any>();

  const addName = async (value: any) => {
    setName(value);
    console.log(name);
  };

  return (
    <NameContext.Provider value={{ name, addName }}>
      {children}
    </NameContext.Provider>
  );
};

// export const Context = React.createContext<any>(null);

// export const ContextProvider: React.FC<any> = ({ children }) => {
//   const [users, setUsers] = React.useState([]);

//   const addUser = async (value: any) => {
//     setUsers(value);
//   };

//   return (
//     <Context.Provider
//       value={{
//         users,
//         addUser,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   );
// };
