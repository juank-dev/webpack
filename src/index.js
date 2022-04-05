import style from "./style.css";
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";
import data from "./data.json";
import { HelloWorld } from "./components/HelloWorld";

console.log("---------Webpack Sin Configuración--------");

const arr = [1,2,3],
    codeESNext = () => console.log(...arr);

codeESNext();
/* alert("Hola mundo") */

/* document.getElementById("app").innerHTML = `<img src="${logo}" alt="Webpack" />`; */
const d = document,
    $app = d.getElementById("app"),
    $h1 = d.createElement("h1"),
    $logo = d.createElement("img"),
    $img = d.createElement("img"),
    $nav = d.createElement("nav");

let menu = "",
    hello = new HelloWorld("Vanilla JS");

data.links.forEach((link) => {
    menu += `<a href="${link[1]}">${link[0]}</a> `;
})

$h1.textContent = hello.greet();
$logo.src = logo;
$img.src = gemini;
$logo.classList.add("icon");
$nav.innerHTML = menu;
$nav.classList.add("menu");

$app.appendChild($h1);
$app.appendChild($logo);
$app.appendChild($nav);
$app.appendChild($img);
