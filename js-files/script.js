const slidesContainer = document.querySelector(".whole");
const allSlides = slidesContainer.querySelectorAll(".each-body");
const allIndicators = slidesContainer.querySelectorAll(".activeBtn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const lastpage = allSlides.length;
let currentPage = 0;

const directionFunction = function (index) {
  const eachBodyWidth = allSlides[0].getBoundingClientRect().width;
  console.log(eachBodyWidth);

  Array.from(allSlides).forEach((each, i) => {
    console.log(i, typeof index, index, eachBodyWidth);
    each.style.transform = `translateX(${100 * (i - index)}%)`;
  });
  console.log("hi");
};
directionFunction(0);

const gotoNextPage = function () {
  if (currentPage === lastpage - 1) {
    // currentPage = 0
    console.log(" last page");
    nextBtn.classList.add("btnOpacity");
    prevBtn.classList.add("btnOpacity");

    //hide the next button
    return;
  } else {
    currentPage++;
    console.log(" other page of next");
    nextBtn.classList.remove("btnOpacity");
    prevBtn.classList.remove("btnOpacity");

    //change the indicator
  }
  directionFunction(currentPage);
};

const gotoPrevPage = function () {
  if (currentPage === 0) {
    console.log("first page");
    prevBtn.classList.add("btnOpacity");

    // currentPage = 0
    //hide the prev button
    return;
  } else {
    currentPage--;
    prevBtn.classList.remove("btnOpacity");

    console.log(" other page of prev");
  }
  directionFunction(currentPage);
};

const activateIndicator = function (page) {
  const curPage = page;
  allIndicators.forEach((each) => each.classList.remove("indicator"));
  allIndicators.forEach((each) => {
    if (+each.textContent === curPage) each.classList.add("indicator");
  });
};

prevBtn.addEventListener("click", gotoPrevPage);
nextBtn.addEventListener("click", gotoNextPage);
