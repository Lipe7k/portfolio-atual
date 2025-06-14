
  const menuMobile = document.querySelector("#menu-mobile");
  const hamburguer = document.querySelector("#menu-hamburguer");

  function abrirMenu() {
    menuMobile.classList.toggle("translate-x-full");
    menuMobile.classList.toggle("translate-x-0");
  }

  function fecharMenu(event) {
      menuMobile.classList.add("translate-x-full");
      menuMobile.classList.remove("translate-x-0");
  }
