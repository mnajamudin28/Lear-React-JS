import React from "react";

const year = new Date();
const currentYear = year.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copy right {currentYear}</p>;
    </footer>
  );
}

export default Footer;
