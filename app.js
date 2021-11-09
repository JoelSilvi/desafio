const d = document;
let X = 10;
let Y = 10;

const move = () => {
  circulo = d.getElementById("circulo");
  X = X + 20;
  circulo.style.top = X + "px";

  rombo = d.getElementById("rombo");
  Y = Y - 20;
  rombo.style.top = Y + "px";
};

setInterval(move, 1000);
