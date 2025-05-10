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
    
    searchForm.addEventListener('click', function() {
        this.classList.add('active');
        searchInput.focus();
    });
    
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
  
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);
  
  menuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });
  
  overlay.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      menu.classList.remove('active');
      this.classList.remove('active');
      body.style.overflow = '';
  });
  
  menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          menu.classList.remove('active');
          overlay.classList.remove('active');
          body.style.overflow = '';
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.blockcard');
  
  cards.forEach(card => {
    const firstImg = card.querySelector('.first');
    const secondImg = card.querySelector('.second');
    
    function toggleActive() {
      if (firstImg.classList.contains('active')) {
        firstImg.classList.remove('active');
        secondImg.classList.add('active');
      } else {
        secondImg.classList.remove('active');
        firstImg.classList.add('active');
      }
    }
    
    firstImg.addEventListener('click', toggleActive);
    secondImg.addEventListener('click', toggleActive);
  });
});