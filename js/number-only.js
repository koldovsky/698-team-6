function validatorNum() {
    const pattern = /^[0-9]*$/gm;
    const qwe = document.querySelector(".contact-form");
    const number = document.queruSelector(".number").value;
  
    if (number.match(pattern)) {
      qwe.classList.add("valid");
      qwe.classList.remove("invalid");
    } else {
      qwe.classList.remove("valid");
      qwe.classList.add("invalid");
    }
  }