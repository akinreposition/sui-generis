import React from "react";

const Header = () => {
  const { welcome } = headerText;
  return (
    <div className="f1 tc mt-7">
      <header id="h1">Hello Natives!</header>
      <p>
        {welcome}
      </p>
    </div>
  );
};

const headerText = {
  welcome : "Welcome Ancestors! search " +
              "for natives and contact details."
}
export default Header;