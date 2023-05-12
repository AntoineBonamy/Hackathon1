import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RiTodoLine } from "react-icons/ri";

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li className="NavBar_li">
            <NavLink to="/">
              <h2 className="NavBar_title">
                <AiOutlineHome size={25} /> Accueil
              </h2>
            </NavLink>
            {/*  //faire une ancre vers un endroit précis de la page pour la todoList */}
            <NavLink to="/todolist">
              <div id="youhou">
                <h2 className="NavBar_title">
                  <RiTodoLine size={25} /> To-Do Liste
                </h2>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
