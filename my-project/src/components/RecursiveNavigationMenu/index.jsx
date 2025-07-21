import React from "react";
import NavigationList from "./NavigationList";

const treeData = [
  {
    id: 1,
    label: "Dashboard",
    children: [],
  },
  {
    id: 2,
    label: "Users",
    children: [
      { id: 3, label: "Active Users", children: [] },
      { id: 4, label: "Blocked Users", children: [] },
    ],
  },
  {
    id: 5,
    label: "Courses",
    children: [
      {
        id: 6,
        label: "Programming",
        children: [
          { id: 7, label: "JavaScript", children: [] },
          { id: 8, label: "Python", children: [] },
        ],
      },
      { id: 9, label: "Design", children: [] },
    ],
  },
  {
    id: 10,
    label: "Settings",
    children: [
      { id: 11, label: "Profile", children: [] },
      { id: 12, label: "Security", children: [] },
    ],
  },
];

export default function Navigation() {
  return (
    <div className="w-[300px] h-[900px] bg-richblack-800 text-richblack-5 ">
      <NavigationList list={treeData} />
    </div>
  );
}
