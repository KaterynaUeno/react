import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../stripeContext";

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    ></aside>
  );
};

export default Submenu;
