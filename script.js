function calculateCombination(n, k) {
  function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
  }

  return factorial(n) / (factorial(k) * factorial(n - k));
}

function generateMenus(principalOptions, sideOptions, dessertOptions) {
  const menus = [];

  for (const principal of principalOptions) {
    for (const side of sideOptions) {
      for (const dessert of dessertOptions) {
        menus.push(`Prato Principal: ${principal}, Acompanhamento: ${side}, Sobremesa: ${dessert}`);
      }
    }
  }

  return menus;
}

function calcularPratos() {
  const pratosPrincipais = document.getElementById("1").value.split(",");
  const acompanhamentos = document.getElementById("2").value.split(",");
  const sobremesas = document.getElementById("3").value.split(",");
  document.getElementById("list").innerHTML = "";

  if (!pratosPrincipais[0] && !acompanhamentos[0] && !sobremesas[0]) return;

  const menus = generateMenus(pratosPrincipais, acompanhamentos, sobremesas);
  const totalCombination =
    calculateCombination(pratosPrincipais.length, 1) *
    calculateCombination(acompanhamentos.length, 1) *
    calculateCombination(sobremesas.length, 1);

  document.getElementById("result").innerHTML = `Total de Menus Possíveis: ${totalCombination}`;

  const list = document.getElementById("list");

  menus.forEach((item) => {
    const breakPoint = document.createElement("br");
    list.innerHTML += item;
    list.appendChild(breakPoint);
  });
}
