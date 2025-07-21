import React, { useState } from "react";

export default function NavigationMenu({ id, label, childrenItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = childrenItems && childrenItems.length > 0;

  return (
    <div className=" flex flex-col text-2xl ml-5 font-inter font-bold mt-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer select-none flex items-center gap-2"
      >
       
        <p >{label}</p>
         {hasChildren && (
          <span className="text-2xl">{isOpen ? "-" : "+"}</span>
        )}
      </div>

      {isOpen && hasChildren && (
        <div className="">
          {childrenItems.map((child) => (
            <ul>
              <li>
                  <NavigationMenu
              key={child.id}
              id={child.id}
              label={child.label}
              childrenItems={child.children}
            />
              </li>
            
            </ul>
            
          ))}
        </div>
      )}
    </div>
  );
}
