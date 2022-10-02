//Abrir e fechar menu mobile

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list")

    body.classList.toggle("menu-nav-active")
})


/* fecha o menu quando clicar em algum item e mudar o icone*/

const navItem = document.querySelectorAll('.nav-item')


navItem.forEach(item => {
    item.addEventListener("click", () => {
        if(body.classList.contains("manu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        } else {
            body.classList.toggle("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})




function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

const titulo2 = document.querySelector('span');
typeWriter(titulo2);


const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85 ;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", ()=>{
  animeScroll();
})