const slides = document.querySelectorAll('.slider');
console.log(slides)
const prevButton = document.querySelector('.services__prev-button');
const nextButton = document.querySelector('.services__next-button');

const slideCount = slides.length;
let slideIndex = 0;

console.log(slideCount)

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();

  console.log('showPreviousSlide')
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
  
  console.log('showNextSlide')

}

function updateSlider() {
    slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.setAttribute('class','slider');
    } else {
      slide.setAttribute('class','none');
    }
  });
}

updateSlider();




// const leftArrowPortfolio = document.querySelector('.portfolio__prev-button');
// const rightArrowPortfolio = document.querySelector(' .portfolio__next-button');

// const cards = document.querySelector(".cards");
// const firstCardWidth = cards.querySelector(".card").offsetWidth + 50;
// // console.log(firstCardWidth)
// const arrowBtns = document.querySelectorAll(".btn-portfolio");


const porfolioBtn =   document.querySelectorAll(".btn-portfolio")
porfolioBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const porfolioCardWidth =  document.querySelector(".card").offsetWidth + 50
    const porfolioCards =  document.querySelector(".cards")

    porfolioCards.scrollLeft += btn.id === "left" ? -porfolioCardWidth : porfolioCardWidth
    console.log(porfolioCardWidth)
  })
})

const porfolioBtnMobile = document.querySelectorAll(".btn-portfolio-mobile")
porfolioBtnMobile.forEach(btn => {
  btn.addEventListener("click", () => {
    const porfolioCardWidthMobile = document.querySelector(".card").offsetWidth + 5
    const porfolioCardsMobile = document.querySelector(".cards")

    porfolioCardsMobile.scrollLeft += btn.id === "left" ? -porfolioCardWidthMobile : porfolioCardWidthMobile
  })
})


const clientBtn = document.querySelectorAll(".clients-btns")
clientBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const clientCards = document.querySelector(".client__cards")
    const clientCardWidth = document.querySelector(".client__card-item").offsetWidth + 40
    
    clientCards.scrollLeft += btn.id === "left" ? -clientCardWidth : clientCardWidth
  })
})

const clientBtnMobile =  document.querySelectorAll(".clients-btns-mobile")

clientBtnMobile.forEach(btn => {
  btn.addEventListener("click", () => {
    const clientCardsMobile =  document.querySelector(".client__cards")
    const clientCardWidthMobile =  document.querySelector(".client__card-item").offsetWidth + 30
    
    clientCardsMobile.scrollLeft += btn.id === "left" ? -clientCardWidthMobile : clientCardWidthMobile
  })
})



// slider(
//   document.querySelector(".cards"),
//   document.querySelector(".card").offsetWidth + 50,
//   document.querySelectorAll(".btn-portfolio")
// )
// slider(
//   document.querySelector(".client__cards"),
//   document.querySelector(".client__card-item").offsetWidth + 40,
//   document.querySelectorAll(".clients-btns")
// )
// slider(
//   document.querySelector(".cards"),
//   document.querySelector(".card").offsetWidth + 5,
//   document.querySelectorAll(".btn-portfolio-mobile")
// )
// slider(
//   document.querySelector(".client__cards"),
//   document.querySelector(".client__card-item"),
//   document.querySelectorAll(".clients-btns-mobile")
// )


// function slider(cards, firstCardWidth, arrowBtns) {
//   arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//       cards.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
//       console.log(firstCardWidth)
//       console.log(firstCardWidth)

//     })
//   })
// }

