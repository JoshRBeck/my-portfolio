import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const links = [
    ["home", "/Home"],
    ["about", "/About"],
    ["contact", "/Contact"],
    ["projects", "/Projects"],
  ];

  return (
    <nav>
      <ul>
        {links.map(([label, path]) => (
          <li key={label}>
            <Link href={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
