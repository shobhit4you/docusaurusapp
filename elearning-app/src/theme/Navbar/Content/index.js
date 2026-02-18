import React from "react";
import NavbarContent from "@theme-original/Navbar/Content";
import LoginButton from "../../../components/LoginButton";

export default function NavbarContentWrapper(props) {
  return (
    <>
      <NavbarContent {...props} />
      <div style={{ marginLeft: "1rem" }}>
        <LoginButton />
      </div>
    </>
  );
}