import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-links">
        <a href="#" className="active">
          All Men's Clothing
        </a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Sports</a>
        <a href="#">New</a>
        <a href="#" className="sale">
          Sale
        </a>
      </div>
      <div className="filter-sort">
        <button>
          Filter & Sort <span className="icon"><svg width={20} height={16} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>
</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;