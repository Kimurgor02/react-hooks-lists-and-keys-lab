import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const Link1 = links.map((link, index) => {
    return <a key={index} href={"#" + link}>{link}</a>
  }) 

  return <nav>{/* display an <a> tag for each link here */};
    {Link1}
  </nav>;
}

export default NavBar;
