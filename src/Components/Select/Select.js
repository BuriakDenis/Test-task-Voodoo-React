import React, { useState } from "react";
import "./Select.css";
import { data } from "./Data/Data";

export default function Select(props) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className={`dropdown ${props.class}`}>
      <div
        className={selectedItem ? `chosen` : `dropdown-header`}
        onClick={toggleDropdown}
      >
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : `${props.title}`}
        <span className={`icon ${isOpen && "open"}`}>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.175 0L5 3.71159L8.825 0L10 1.14825L5 6L0 1.14825L1.175 0Z"
              fill="#545A6D"
              fill-opacity="0.6"
            />
          </svg>
        </span>
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className={`dropdown-item ${item.id == selectedItem && "selected"}`}
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
