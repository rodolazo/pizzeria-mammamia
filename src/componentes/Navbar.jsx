import React from "react";

const Navbar = () => {
  const total = 25000;

  const token = false;

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item navbar__item_logo">¡Pizzería Mamma Mía!</li>
        <li className="navbar__item navbar__item_link">
          <i class="bi bi-house-door"></i> Home
        </li>
        <li
          className={`navbar__item navbar__item_link ${
            token ? "activo" : "inactivo"
          }`}
        >
          <i class="bi bi-person"></i> Profile
        </li>
        <li
          className={`navbar__item navbar__item_link ${
            token ? "activo" : "inactivo"
          }`}
        >
          <i class="bi bi-box-arrow-left"></i> Logout
        </li>
        <li
          className={`navbar__item navbar__item_link ${
            token ? "inactivo" : "activo"
          }`}
        >
          <i class="bi bi-box-arrow-right"></i> Login
        </li>
        <li
          className={`navbar__item navbar__item_link ${
            token ? "inactivo" : "activo"
          }`}
        >
          <i class="bi bi-person-plus navbar__icon"></i>
          Register
        </li>
        <li className="navbar__item navbar__item_last">
          <i class="bi bi-cart navbar__icon"></i>
          {`Total: $ ${total.toLocaleString("es-ES")}`}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
