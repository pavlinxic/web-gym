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
