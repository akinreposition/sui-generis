import React from "react";

const Header = () => {
  const { welcome } = headerText;
  return (
    <div className="f1 tc mt-7">
      <h1 id="h1">Hello Natives!</h1>
      <p>
        {welcome}
      </p>
    </div>
  );
};

const headerText = {
  welcome : "Welcome Ancestors! search" +
              "for natives and contact details."
}
export default Header;