const selectors = {
    hex: document.querySelector("#hex"),
    count: document.querySelector("#count"),
    form: document.querySelector("form"),
    submit: document.querySelector("#submit"),
    display: document.querySelector(".display"),
   };
   const URL = "https://www.thecolorapi.com/scheme?";
   
   
   async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      alert(error);
    }
   }
   
   
   selectors.form.addEventListener("submit", function (e) {
    e.preventDefault();
    let checkmode = document.querySelector('input[name="mode"]:checked');
    let named = document.querySelector('input[name="name"]:checked');
    console.log(checkmode);
    console.log(
      `${URL}hex=${selectors.hex.value}&mode=${checkmode.id}&count=${selectors.count.value}`
    );
   
   
    const promise = getData(
      `${URL}hex=${selectors.hex.value}&mode=${checkmode.id}&count=${selectors.count.value}`
    );
    promise.then(function (result) {
      console.log(result);
      if (named.id == "named") {
        selectors.display.insertAdjacentHTML(
          "beforeend",
          `<img
        src=${result.image.named}
      />`
        );
      } else {
        selectors.display.insertAdjacentHTML(
          "beforeend",
          `<img
        src=${result.image.bare}
      />`
        );
      }
    });
   });
   
   
   
   