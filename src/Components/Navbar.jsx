import React from "react";
import './style.css'
import cart from '../images/cart.png'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-slate-200 navbar-white h-[4rem] shadow-lg">
        <a className="navbar-brand" href="/">
          <span className="hhh">KLIE</span> <span className="ggg">Store</span>
        </a>

        <ul className="navbar-nav">
          <li className="nav-item mt-1 ml-[49rem] font-bold">
            <Link className="nav-link" to="/">
             {props.home}
            </Link>
          </li>
          <li className="nav-item mt-1 font-bold">
            <Link className="nav-link" to="/about">
            {props.about}
            </Link>
          </li>
          <li className="nav-item mt-1 font-bold">
            <Link className="nav-link" to="/product">
            {props.products}
            </Link>
          </li>
          <li className="nav-item mt-1 font-bold">
            <Link className="nav-link" to="/contact">
            {props.contact}
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
            <button className="w-28 h-8 bg-violet-800 text-white">Log Out</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">
            <img src={cart} alt="" className="w-7"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
