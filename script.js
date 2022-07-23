function openMenu (){
    let menuTab = document.querySelector('.menu__btn');
    let closeTab = document.querySelector('.close__btn');
    let mobileMenu = document.querySelector('.mobile__menu');
  menuTab.addEventListener('click', () =>{
    menuTab.style.display = 'none';
    mobileMenu.style.display = 'flex';
    closeTab.style.display = 'flex';
  })
  closeTab.addEventListener('click', ()=> {
    menuTab.style.display = 'flex';
    mobileMenu.style.display = 'none';
    closeTab.style.display = 'none';
  })

}

openMenu();