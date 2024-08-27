barba.init({
  views: [
    {
      namespace: 'home',
      afterEnter() {
        gsap.from('.poster', {
          opacity: 0,
          ease: "elastic.out(1, 0.3)",
        } )
        gsap.to('.poster', {
          y:-100,
          duration: 2, 
          ease: "elastic.out(1, 0.3)",
          opacity: 1,
          scale:1.2
      })
      }
    },
    {
      namespace: 'price',
      afterEnter() {
        gsap.from('.wrapper-price', {
          opacity: 0,
          ease: "elastic.out(1, 0.3)",
        } )
        gsap.to('.wrapper-price', {
          y:-50,
          duration: 2, 
          ease: "elastic.out(1, 0.3)",
          opacity: 1,
          scale:1
      })
      }
    },
    {
      namespace: 'direction',
      afterEnter() {
        gsap.from('.direction-anim', {
          opacity: 0, 
          ease: "elastic.out(1, 0.3)",
          y:-100
        } )
        gsap.to('.direction-anim', {
          y:0,
          duration: 2, 
          ease: "elastic.out(1, 0.3)",
          opacity: 1,
          scale:1
      })
      gsap.from('.timeline__item', {
        opacity: 0, 
        ease: "elastic.out(1, 0.3)",
        x:-100
      } )
      gsap.to('.timeline__item', {
        x:0,
        duration: 2, 
        ease: "elastic.out(1, 0.3)",
        opacity: 1,
        scale:1
      })
      gsap.from('.btn-dir', {
        opacity: 0, 
        y:100
      } )
      gsap.to('.direction-anim', {
        y:0,
        duration: 2, 
        opacity: 1,
        scale:1
    })
      }
    },
    {
    namespace: 'work',
    afterEnter() {
      gsap.from('.swiper-workout', {
        opacity: 0,
        ease: "elastic.out(1, 0.3)",
        x:-100
      } )
      gsap.to('.swiper-workout', {
        x:0,
        duration: 2, 
        ease: "elastic.out(1, 0.3)",
        opacity: 1,
        scale:1
      }, 0.5)
      workPage()
      function workPage() {
        var swiper = new Swiper(".mySwiper", {
          effect: "cards",
          grabCursor: true,

          loop: true,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
        });

        const cardArt = document.querySelectorAll(".card__article");
        const link = document.querySelectorAll(".link");
        const close = document.querySelectorAll(".ri-close-line");
        cardArt.forEach((art, index) => {
          art.addEventListener("click", () => {
            if (!art.classList.contains("active")) {
              cardArt[index].classList.add("active");
            }
          });
          art.addEventListener("mouseleave", () => {
            if (art.classList.contains("active")) {
              cardArt[index].classList.remove("active");
            }
          });

        });
      }




    },

  },
  {
    namespace: 'couch-couch',
    afterEnter() {
      gsap.from('.swiper-couch',{
        opacity: 0,
        x:100
      } ) 
      gsap.to('.swiper-couch', {
        x:0,
        duration: 1, 
        opacity: 1,
        scale:1
      }, 0.5)
      couchPage()
      function couchPage() {
        var swiper = new Swiper(" .mySwiper-2", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          autoplay: {
            delay: 6000,
          },
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          },
          loop: true,
          pagination: {
            el: ".swiper-pagination",
          },
        });
        const modal = document.querySelectorAll('.modal'),
          cardBtn = document.querySelectorAll('.card__product'),
          modalClose = document.querySelectorAll('.modal__close'),
          modalCard = document.querySelectorAll('.modal__card')

        let activeModal = (modalClick) => {
          modal[modalClick].classList.add('active-modal')
        }

        /* Show modal */
        cardBtn.forEach((cardBtn, i) => {
          cardBtn.addEventListener('click', () => {
            activeModal(i)
          })
        })

        /* Hide modal */
        modalClose.forEach((modalClose) => {
          modalClose.addEventListener('click', () => {
            modal.forEach((modalRemove) => {
              modalRemove.classList.remove('active-modal')
            })
          })
        })

        /* Hide modal on background click */
        modal.forEach((modal) => {
          modal.addEventListener('click', () => {
            modal.classList.remove('active-modal')
          })
        })

        /* Don't hide modal on card click (by event propagation) */
        modalCard.forEach((modalCard) => {
          modalCard.addEventListener('click', (e) => {
            e.stopPropagation()
          })
        })
      }



    },
  },
  {
    namespace: 'foto',
    afterEnter() {
      gsap.fromTo('.container-foto', {
        opacity: 0,

      }, {
        opacity: 1,
        duration: 1,
      })
      gsap.from('.slider-foto', {
        opacity: 0,
        x:100
      } )
      gsap.to('.slider-foto', {
        x:0,
        duration: 1, 
        opacity: 1,
        scale:1
      }, 0.5)
      gsap.from('.span-foto', {
        opacity: 0,
        y:-100
      } )
      fotosPage()
      function fotosPage() {
        let next = document.querySelector(".next");
        let prev = document.querySelector(".prev");
        let slider = document.querySelector(".slider-foto");
      
        next.addEventListener("click", () => {
          let slides = document.querySelectorAll(".slides-foto");
          slider.appendChild(slides[0]);
        });
        prev.addEventListener("click", () => {
          let slides = document.querySelectorAll(".slides-foto");
          slider.prepend(slides[slides.length - 1]);
        });
      }
    }
  },
  {
    namespace: 'contact',
    afterEnter() {
      gsap.from('.dark', {
        opacity: 0,
        scale: 0
      } )
      gsap.to('.dark', {
        scale:1,
        duration: 1, 
        opacity: 1
      })
      contactPage()
      function contactPage() {
        const selectors = document.querySelectorAll(".selector");

selectors.forEach((selector) => {
  const knob = selector.querySelector(".knob");
  const ul = selector.querySelector("ul");
  const radios = selector.querySelectorAll('input[type="radio"]');
  const hrefa = document.querySelectorAll(".hrefa");

  function handleClick() {
    selector.classList.toggle("active");



    

    if (selector.classList.contains("active")) {
      selector.style.removeProperty("--angle");
    } else {
      selector.style.setProperty("--angle", "-90deg");

      // Check the first one on close
      radios.forEach((radio, index) => {
        if (index !== 0) {
          radio.checked = false;
        } else {
          radio.checked = true;
        }
      });
    }
  }


  knob.addEventListener("click", handleClick);
});


const hrefa = document.querySelectorAll(".hrefa");
const radios = document.querySelectorAll('input[type="radio"]');

radios.forEach((radio) => {
  hrefa.forEach((href) => {
    href.addEventListener("click", () => {
    radio.checked = true;
  })
  });
});

      }
    }
  }
],


  transitions: [{
    duration: 2000,
    name: 'opacity-transition',
    async: true,
    once: true,
    // @ts-ignore
    leave(data) {
      return gsap.timeline().to(data.current.container, {
        opacity: 0
      })
        .fromTo('.box', {
          duration: 4000,
          transitions: 4,
          x: '100%',
          zIndex: 10,
        }, {
          x: '-100%',
          delay: 0.2,
          duration: 1,
          zIndex: -1,
        }, 0.2
        )
    },
    enter(data) {
      return gsap.timeline().from(data.next.container, {
        opacity: 0,
      })
      // .fromTo('.box', {
      //   duration: 4000,
      //   transitions: 4,
      //   x: '100%',
      //   zIndex: 10,
      // }, {
      //   x: '-100%',

      //   duration: 1,
      //   zIndex: -1
      // }, 0.1
      // )
    }
  }]
});












