import React from "react";
import NavigationMenu from "./NavigationMenu";

export default function NavigationList({ list }) {
  return (
    <div className="flex space-x-1 space-y-4 flex-col  font-semibold">
      {list.map((item) => (
        <ul>
          <NavigationMenu
          key={item.id}
          id={item.id}
          label={item.label}
          childrenItems={item.children}
        />
        </ul>
        
      ))}
    </div>
  );
}
