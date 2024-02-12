// Get all dropdowns on the page that aren't hoverable.
let options = document.querySelectorAll((`[id^="opt"]`));
let normalProducts = document.querySelectorAll((`[id^="norm"]`))
let prices = document.querySelectorAll((`[id^="price"]`))
//console.log(products)
//console.log(normalProducts)
let selected = []
let selectedProducts = []
let hide1 = " "
let selectedPrice = " "
// let activeProducts = []
// let lol = " "

options.forEach((opt) => {
  console.log(opt)
  opt.addEventListener("click", () => {
    let index = selected.indexOf(opt.id);
    if (opt.classList.contains("is-active")) {
      console.log("category deactivated!")
      opt.classList.remove("is-active")
      if (index > -1) { // only splice array when item is found
        selected.splice(index, 1); // 2nd parameter means remove one item only
      } console.log(selected);
      console.log(opt.id)
      if (opt.id === "optNormal") {
        selectedProducts = document.querySelectorAll((`[data-type="normal"]`))
        console.log(selectedProducts)
        console.log(selectedProducts.length)
        for (let i = 0; i < selectedProducts.length; i++) {
          selectedProducts[i].parentNode.style.display = "none"
          // hide1 = document.getElementById("youthSun")
          // hide1.style.display = "none"
        }
      }
      if (opt.id === ("optDry")) {
        selectedProducts = document.querySelectorAll((`[data-type="dry"]`))
        console.log(selectedProducts)
        console.log(selectedProducts.length)
        for (let i = 0; i < selectedProducts.length; i++) {
          selectedProducts[i].parentNode.style.display = "none"
        }
      }
      if (opt.id === ("optOily")) {
        selectedProducts = document.querySelectorAll((`[data-type="oily"]`))
        console.log(selectedProducts)
        console.log(selectedProducts.length)
        for (let i = 0; i < selectedProducts.length; i++) {
          selectedProducts[i].parentNode.style.display = "none"
        }
      }
      if (opt.id === ("optCombo")) {
        selectedProducts = document.querySelectorAll((`[data-type="combo"]`))
        console.log(selectedProducts)
        console.log(selectedProducts.length)
        for (let i = 0; i < selectedProducts.length; i++) {
          selectedProducts[i].parentNode.style.display = "none"
        }
      }
    } else {
      ///////////////////////////////
      console.log("category activated!")
      opt.classList.add("is-active")
      selected.push(opt.id);
      if (selected.includes("optNormal")) {
        selectedProducts = document.querySelectorAll((`[data-type="normal"]`))
        console.log(selectedProducts)
        console.log(selectedProducts.length)
        for (let i = 0; i < selectedProducts.length; i++) {
          selectedProducts[i].parentNode.style.display = "flex"
          // hide1 = document.getElementById("youthSun")
          // hide1.style.display = "none"
        }
      }
      if (selected.includes("optDry")) {
        selectedProducts = document.querySelectorAll((`[data-type="dry"]`))
        console.log(selectedProducts)
        console.log(selectedProducts.length)
        for (let i = 0; i < selectedProducts.length; i++) {
          selectedProducts[i].parentNode.style.display = "flex"
        }
      }
      if (selected.includes("optOily")) {
        selectedProducts = document.querySelectorAll((`[data-type="oily"]`))
        console.log(selectedProducts)
        console.log(selectedProducts.length)
        for (let i = 0; i < selectedProducts.length; i++) {
          selectedProducts[i].parentNode.style.display = "flex"
        }
      }
      if (selected.includes("optCombo")) {
        selectedProducts = document.querySelectorAll((`[data-type="combo"]`))
        console.log(selectedProducts)
        console.log(selectedProducts.length)
        for (let i = 0; i < selectedProducts.length; i++) {
          selectedProducts[i].parentNode.style.display = "flex"
        }
      }
    }
  });
})

let lowPrices = []
let mediumPrices= []
let highPrices = []

prices.forEach((price) => {
  price.addEventListener("click", () => {
    priceAll.classList.remove("is-active")
    priceLow.classList.remove("is-active")
    priceMedium.classList.remove("is-active")
    priceHigh.classList.remove("is-active")
    price.classList.add("is-active")
    selectedPrice = price.id
    console.log(selectedPrice)
     lowPrices = document.querySelectorAll((`[data-price="low"]`))
     mediumPrices = document.querySelectorAll((`[data-price="medium"]`))
     highPrices = document.querySelectorAll((`[data-price="high"]`))
    if (selectedPrice == "priceAll") {
    for (let i = 0; i < lowPrices.length; i++) {
         lowPrices[i].parentNode.style.display = "flex"
        }
    for (let i = 0; i < mediumPrices.length; i++) {
         mediumPrices[i].parentNode.style.display = "flex"
        }
    for (let i = 0; i < highPrices.length; i++) {
         highPrices[i].parentNode.style.display = "flex"
        }
    }
    else if (selectedPrice == "priceLow") {
      for (let i = 0; i < lowPrices.length; i++) {
         lowPrices[i].parentNode.style.display = "flex"
        }
    for (let i = 0; i < mediumPrices.length; i++) {
         mediumPrices[i].parentNode.style.display = "none"
        }
    for (let i = 0; i < highPrices.length; i++) {
         highPrices[i].parentNode.style.display = "none"
        }
    }
    else if (selectedPrice == "priceMedium") {
      for (let i = 0; i < lowPrices.length; i++) {
         lowPrices[i].parentNode.style.display = "none"
        }
    for (let i = 0; i < mediumPrices.length; i++) {
         mediumPrices[i].parentNode.style.display = "flex"
        }
    for (let i = 0; i < highPrices.length; i++) {
         highPrices[i].parentNode.style.display = "none"
        }
    }
    else if (selectedPrice == "priceHigh") {
      for (let i = 0; i < lowPrices.length; i++) {
         lowPrices[i].parentNode.style.display = "none"
        }
    for (let i = 0; i < mediumPrices.length; i++) {
         mediumPrices[i].parentNode.style.display = "none"
        }
    for (let i = 0; i < highPrices.length; i++) {
         highPrices[i].parentNode.style.display = "flex"
        }
    }
  })
})
