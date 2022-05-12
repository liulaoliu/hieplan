import React from "react";
import { FaHamburger } from "react-icons/fa";
import st from "./toggleSidebarIcon.module.css";
type Props = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ToggleSidebarIcon({ state, setState }: Props) {
  return (
    <div
      className={st.hamHeader}
      onClick={() => {
        setState(!state);
      }}
    >
      <FaHamburger size={state ? "20px" : "30px"} color="orange"></FaHamburger>
    </div>
  );
}
