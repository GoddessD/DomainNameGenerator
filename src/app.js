/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "we"];
  let adj = ["great", "big", "grand"];
  let noun = ["jogger", "racoon", "warrior"];
  let extension = [".com", ".net", ".us", ".io"];

  document.querySelector("#domainName").innerHTML +=
    "<ul>${pronoun[0]}${adj[0]}${noun[0]}${extension[0]}</ul>";
};
