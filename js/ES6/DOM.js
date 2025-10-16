let a = document.createElement("div");
let b = document.getElementById("b");
let h1 = document.createElement("h1");
  h1.innerText = "python is used for ML";
a.appendChild(h1);
b.appendChild(a);

document.body.appendChild(b);