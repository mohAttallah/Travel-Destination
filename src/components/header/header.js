import React from "react";
import { Link } from "react-router-dom";
import'../header/header.css';
export default function Header() {
  return (
    <header>
      <h1>Travel Destination</h1>
      <Link to="/">Home</Link>
    </header>
  );
}
