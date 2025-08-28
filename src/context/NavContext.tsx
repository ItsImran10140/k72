/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Create contexts with default values
export const NavbarContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);
export const NavbarColorContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);

const NavContext = ({ children }: any) => {
  const [navColor, setNavColor] = useState("white");
  const [navOpen, setNavOpen] = useState(false);

  const locate = useLocation().pathname;

  useEffect(() => {
    if (locate === "/projects" || locate === "/agence") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [locate]);

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        {children}
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default NavContext;
