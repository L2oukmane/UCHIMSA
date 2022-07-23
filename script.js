function openMenu() {
  const menuTab = document.querySelector('.menu__btn');
  const closeTab = document.querySelector('.close__btn');
  const mobileMenu = document.querySelector('.mobile__menu');
  menuTab.addEventListener('click', () => {
    menuTab.style.display = 'none';
    mobileMenu.style.display = 'flex';
    closeTab.style.display = 'flex';
  });
  closeTab.addEventListener('click', () => {
    menuTab.style.display = 'flex';
    mobileMenu.style.display = 'none';
    closeTab.style.display = 'none';
  });
}

openMenu();