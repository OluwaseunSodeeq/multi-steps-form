const slidesContainer = document.querySelector(".whole");
const allSlides = slidesContainer.querySelectorAll(".each-body");
const allIndicators = document.querySelectorAll(".activeBtn");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const lastpage = allSlides.length;
let currentPage = 0;

const stepThreeContainer = document.querySelector(".step-three-container");
//step four variables
const stepFourContainer = document.querySelector(".step-four-container");
const totalContainer = document.querySelector(".total-line");
const checkedBtns = [1, 2, 3];

const directionFunction = function (index) {
  //   const eachBodyWidth = allSlides[0].getBoundingClientRect().width;
  Array.from(allSlides).forEach((each, i) => {
    each.style.transform = `translateX(${100 * (i - index)}%)`;
  });
};
directionFunction(0);

//
const gotoNextPage = function () {
  if (currentPage !== lastpage) {
    currentPage++;
    prevBtn.classList.remove("btnOpacity");
  }
  console.log("I am three AA", typeof currentPage);

  activateIndicator(currentPage);
  directionFunction(currentPage);
  console.log("next", currentPage);
  if (currentPage === 3) {
    console.log("I am three", typeof currentPage);
    const markedCheckbox = stepThreeContainer.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    for (const box of markedCheckbox) {
      const itsparent = box.closest("label");
      console.log(itsparent);
    }

    console.log(markedCheckbox);

    stepFourContainer.innerHTML = "";
    let html = `
    <div class="first-line">
        <div class="left selected-plan">
            <p>Archade<span class="time">(Yearly)</span></p>
            <p class="change-plan">Change</p>
        </div>
        <div class="right plan-amount">
            <p>90$/ <span class="suffix">Yr</span></p>
        </div>
    </div>
    `;
    for (const chk of theArray) {
      html += `
        <div class="second-lines">
            <div class="add-on-picked">Online-servie</div>
            <div class="its-amount">
                <p>90$/ <span class="suffix">Yr</span></p>
            </div>
        </div>


        `;
    }

    stepFourContainer.insertAdjacenthTML("afterbegin", html);
  }
};

// const gotoNextPage = function () {
//   if (currentPage === lastpage - 1) {
//     console.log(lastpage);

//     // nextBtn.classList.add("btnOpacity");
//     // prevBtn.classList.add("btnOpacity");
//   } else {
//     currentPage++;
//     console.log(" other page of next");
//     prevBtn.classList.remove("btnOpacity");
//   }
//   activateIndicator(currentPage);
//   directionFunction(currentPage);
// };

const gotoPrevPage = function () {
  if (currentPage === 0) return;
  else {
    currentPage--;
    prevBtn.classList.remove("btnOpacity");
  }

  activateIndicator(currentPage);
  directionFunction(currentPage);
  console.log("prev", currentPage);
};
// const gotoPrevPage = function () {
//   if (currentPage === 0) {
//     console.log(currentPage, typeof currentPage);
//     // currentPage = 0
//     //hide the prev button
//     // prevBtn.classList.add("btnOpacity");
//   } else {
//     currentPage--;
//     prevBtn.classList.remove("btnOpacity");
//   }
//   activateIndicator(currentPage);
//   directionFunction(currentPage);
// };

const activateIndicator = function (page) {
  const curPage = page + 1;
  for (const each of allIndicators) {
    each.classList.remove("indicator");
  }
  allIndicators.forEach((each) => {
    if (+each.textContent !== curPage) return;
    each.classList.add("indicator");
  });
  if (curPage == 1) {
    prevBtn.classList.add("btnOpacity");
  } else if (curPage > 4) {
    nextBtn.classList.add("btnOpacity");
    prevBtn.classList.add("btnOpacity");
  }
};
console.log("current page", currentPage);

prevBtn.addEventListener("click", gotoPrevPage);
nextBtn.addEventListener("click", gotoNextPage);
