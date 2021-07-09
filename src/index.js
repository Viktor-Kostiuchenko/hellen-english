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
    openMobileModalBtn: document.querySelector('[burger]'),
     closeBurger1Btn: document.querySelector('[burger-1]'),
     closeBurger2Btn: document.querySelector('[burger-2]'),
     closeBurger3Btn: document.querySelector('[burger-3]'),
     closeBurger4Btn: document.querySelector('[burger-4]'),
        openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    openBackdropModalBtn: document.querySelector('[data-modal-open-2]'),
    modalMobile: document.querySelector('[data-menu]'),
     modal: document.querySelector('[data-modal]'),
    mod: document.getElementsByTagName('body')[0],
    burger: document.querySelector('[burger]'),
    logo: document.querySelector('[mobile-logo]'),
  };
  refs.openMobileModalBtn.addEventListener('click', toggleModalMobile);
  refs.closeBurger1Btn.addEventListener('click', toggleModalMobile);
  refs.closeBurger2Btn.addEventListener('click', toggleModalMobile);
  refs.closeBurger3Btn.addEventListener('click', toggleModalMobile);
  refs.closeBurger4Btn.addEventListener('click', toggleModalMobile);
   refs.openBackdropModalBtn.addEventListener('click', modal);
   refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModalMobile() {
    refs.modalMobile.classList.toggle('is-open');
    refs.mod.classList.toggle('no-scrol');
    refs.burger.classList.toggle('burger-active');
    refs.logo.classList.toggle('mobile-menu-logo');
  }
  function modal() {
    refs.modalMobile.classList.toggle('is-open');
    refs.burger.classList.toggle('burger-active');
    refs.logo.classList.toggle('mobile-menu-logo');
    refs.modal.classList.toggle('is-hidden');
   }
     function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
   refs.mod.classList.toggle('no-scrol');
  }


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior: "smooth",
         block: "start"
      })
   })
}

})();


// scroll-button
document.getElementById("buttonUp").onclick = function scrollUpFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()}
function scrollFunction() {
   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("buttonUp").style.display ='block';
   }
   else {
         document.getElementById("buttonUp").style.display = "none"
      }
   }
