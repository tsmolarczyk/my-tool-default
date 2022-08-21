import React from "react";
import css from "./App.module.css";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

import { NavBar } from "components/NavBar/NavBar";
import { FirstPage } from "components/Pages/FirstPage/FirstPage";
import { FourthPage } from "components/Pages/FourthPage/FourthPage";
import { SecondPage } from "components/Pages/SecondPage/SecondPage";
import { ThirdPage } from "components/Pages/ThirdPage/ThirdPage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className={css.navbar}>
          <NavLink
            to='/firstpage'
            className={css.navlink}
            style={({ isActive }) =>
              isActive
                ? {
                    borderBottom: "3px red solid",
                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
          >
            First Page
          </NavLink>
          <NavLink
            to='/secondpage'
            className={css.navlink}
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    borderBottom: "3px red solid",
                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
          >
            Second Page
          </NavLink>
          <NavLink
            to='/thirdpage'
            className={css.navlink}
            style={({ isActive }) =>
              isActive
                ? {
                    borderBottom: "3px red solid",
                  }
                : { color: "#545e6f", background: "#f0f0f0" }
            }
          >
            Third Page
          </NavLink>
        </div>

        <Routes>
          <Route path='/firstpage' element={<FirstPage />} />
          <Route path='/secondpage' element={<SecondPage />} />
          <Route path='/thirdpage' element={<ThirdPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
