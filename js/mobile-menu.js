(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const headerContainer = document.querySelector('.header-container');

  openMenuBtn.addEventListener("click", toggleMobileWindow);
  closeMenuBtn.addEventListener("click", toggleMobileWindow);

  function toggleMobileWindow(){
    mobileMenu.classList.toggle("visually-hidden");
    headerContainer.classList.toggle("visually-hidden");
    element.classList.toggle("visually-hidden");
  }
})();