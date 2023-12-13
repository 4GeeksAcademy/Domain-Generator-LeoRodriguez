/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  document.querySelector("#generator").innerHTML = generateDomain();
};

const shuffleArray = Array => {
  const shuffledArray = Array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const generateDomain = () => {
  let pronoun = shuffleArray(["the", "our"]);
  let adj = shuffleArray(["great", "big"]);
  let noun = shuffleArray(["jogger", "racoon"]);

  let containerSelect = document.querySelector(".Domains");
  containerSelect.innerHTML = "";
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");

        let newChild = document.createElement("h3");
        newChild.innerText = pronoun[i] + adj[j] + noun[k] + ".com";
        containerSelect.append(newChild);
      }
    }
  }
};

const reloadBtn = document.querySelector(".btn");
const reload = () => {
  generateDomain();
};

reloadBtn.addEventListener("click", reload);
