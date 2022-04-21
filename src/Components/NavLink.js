import React from "react";
import { useLocation, Link } from "wouter";

export default function NavLink(props) {
  const { linkData, navElements, idx } = props;
  const [location, setLocation] = useLocation();
  const activeLink = location === linkData.link;

  return (
    <div id="NavLink">
      {!linkData.href ? (
        <Link to={linkData.link}>
          <div
            ref={(e) => {
              navElements.current[idx] = e;
            }}
            className={`navLink ${activeLink && "active"}`}
          >
            {linkData.title}
          </div>
        </Link>
      ) : (
        <a
          ref={(e) => {
            navElements.current[idx] = e;
          }}
          href={linkData.href}
          className="navLink"
        >
          {linkData.title}
        </a>
      )}
    </div>
  );
}
