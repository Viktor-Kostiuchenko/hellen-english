import './sass/main.scss';

$(function () {
    $('.slider').slick({
        slidesToShow: 7,
        speed: 600,
        initialSlide: 0,
        asNavFor: ".comments-list",
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                initialSlide: 0,
            }
        }]
        
    });
    $('.comments-list').slick({
        arrows: true,
        asNavFor: ".slider",
         responsive: [{
            breakpoint: 768,
            settings: {
                arrows:false,
            }
        }]
    })
})

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length >0) {
   window.addEventListener('scroll', animOnScroll)
   function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }

   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}  
   }
   setTimeout(() => {
      animOnScroll();
   }, 400);

   
}

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    mod: document.getElementsByTagName('body')[0], 
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
   refs.mod.classList.toggle('no-scrol');

  }
})();

(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();