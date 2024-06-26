import { useState } from "react";

function TabButton({ children, isSelected, ...commonProps }) {
  return (
    <button className={isSelected && "active"} {...commonProps}>
      {children}
    </button>
  );
}

export default TabButton;
