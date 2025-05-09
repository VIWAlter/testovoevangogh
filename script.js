document.addEventListener('DOMContentLoaded', function() {
    const oldPrices = document.querySelectorAll('.oldprice');
    oldPrices.forEach(oldPrice => {
      if (oldPrice.innerHTML.trim() !== '') {
        const newPrice = oldPrice.closest('.price').querySelector('.newprice');
        if (newPrice) {
          newPrice.style.color = '#E45302';
        }
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.querySelector('.searchandbasket form');
    const searchInput = searchForm.querySelector('input');
    
    // При клике на форму (иконку) - активируем поле ввода
    searchForm.addEventListener('click', function() {
        this.classList.add('active');
        searchInput.focus();
    });
    
    // При потере фокуса - сворачиваем, если поле пустое
    searchInput.addEventListener('blur', function() {
        if (this.value === '') {
            searchForm.classList.remove('active');
        }
    });
});





document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.menu');
  const body = document.body;
  
  // Создаем элемент для затемнения фона
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
  
  // Клик по бургеру
  menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Клик по затемнению
  overlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      menu.classList.remove('active');
      this.classList.remove('active');
      body.style.overflow = '';
  });
  
  // Клик по ссылке в меню
  menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          menu.classList.remove('active');
          overlay.classList.remove('active');
          body.style.overflow = '';
      });
  });
});