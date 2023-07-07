const slidesContainer = document.querySelector(".whole");
const allSlides = slidesContainer.querySelectorAll(".each-body");
const allIndicators = document.querySelectorAll(".activeBtn");
const prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
let ConfirmBtn = document.querySelector(".next").textContent;
const lastpage = allSlides.length;
let activatedBtn;
let currentPage = 0;

//step two variables
const step2MainContainer = document.querySelector(".step-two-body");
const step2Cards = step2MainContainer.querySelector(".cards");
const cardsNodelist = step2Cards.querySelectorAll(".card");
// console.log(cardsNodelist);

const totalCon = document.querySelector(".total-line");
let totalConP = (totalCon.querySelector("p").textContent = `$0`);
//Plans options
let myplan = {};
const selectedOption = function () {
  const picked = this;
  cardsNodelist.forEach((each) => each.classList.remove("selected-plan0"));
  picked.classList.add("selected-plan0");

  myplan.selectedOption = picked;
  // console.log(myplan);
};
cardsNodelist.forEach((each) => each.addEventListener("click", selectedOption));
// const opt = selectedOption();

//Plans Btns
const switchContainer = step2MainContainer.querySelector(".switch");
const swicharr = switchContainer.querySelectorAll("span");
const selectedPlanBtns = function () {
  const picked = this;
  swicharr.forEach((each) => each.classList.remove("selectedplanBtns"));
  picked.classList.add("selectedplanBtns");
  myplan.selectedBtn00 = picked;
  console.log(picked);

  activatedBtn = picked.dataset.val;
  console.log(activatedBtn);
  // return dataValue;
};
swicharr.forEach((each) => each.addEventListener("click", selectedPlanBtns));

//step three variables
const stepThreeContainer = document.querySelector(".step-three-container");
//step four variables
const step4MainContainer = document.querySelector(".step-four-body");
let stepFourContainer = step4MainContainer.querySelector(
  ".step-four-container"
);
const totalContainer = step4MainContainer.querySelector(".total-line");
let planAmountArray = [];

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
    //all input in step one
    const allInputInStep1NodeLst = document.querySelectorAll(
      ".step-one-body input"
    );
    const allInputInStep1 = Array.from(allInputInStep1NodeLst);
    const num = allInputInStep1[2].value;
    const notANum = isNaN(+num);
    const anyisEmpty = allInputInStep1.some(
      (each) => each.value === "" || each.value === 0
    );
    console.log(anyisEmpty, allInputInStep1, num, num.length, notANum);
    // if (num.length < 11 || num.length > 15 || anyisEmpty || notANum) return;
    currentPage++;
    prevBtn.classList.remove("btnOpacity");
  }
  console.log("I am three AA", typeof currentPage);

  activateIndicator(currentPage);
  directionFunction(currentPage);
  let sumArr = [];

  console.log("next", currentPage);
  if (currentPage === 3) {
    console.log("I am three", typeof currentPage);
    const markedCheckbox = stepThreeContainer.querySelectorAll(
      'input[type="checkbox"]:checked'
    );

    console.log(markedCheckbox);
    console.log(myplan, myplan.selectedOption);
    if (myplan.selectedOption === undefined || myplan.selectedOption === {})
      return;
    const firstLineText = myplan.selectedOption.querySelector("h4").textContent;
    const firstLineAmtText =
      myplan.selectedOption.querySelector("p").textContent;

    const timeText = myplan.selectedBtn00.textContent;
    console.log(firstLineText, firstLineAmtText.slice(1, -3), timeText);
    stepFourContainer.innerHTML = "";
    sumArr.push(firstLineAmtText.slice(1, -3));
    let html = `
    <div class="first-line">
        <div class="left selected-plan">
            <p>${firstLineText}<span class="time">(${
      activatedBtn === "2" ? "Yearly" : "monthtly"
    })</span></p>
            <p class="change-plan">Change</p>
        </div>
        <div class="right plan-amount">
            <p>$${firstLineAmtText.slice(1, -3)}<span class="suffix">${
      activatedBtn === "2" ? "/yr" : "/mo"
    }</span></p>
        </div>
    </div>
    `;
    for (const box of markedCheckbox) {
      const itsparent = box.closest("label");
      const boldText = itsparent.querySelector(".bold").textContent;
      const lightText = itsparent.querySelector(".light").textContent;
      const amountText = itsparent.querySelector(".right").textContent;
      console.log(itsparent, boldText, lightText, amountText);

      sumArr.push(amountText.slice(2, -3));
      console.log(
        amountText,
        amountText.slice(2, -3),
        amountText.slice(-3),
        boldText,
        sumArr
      );

      html += `
        <div class="second-lines">
            <div class="add-on-picked">${boldText}</div>
            <div class="its-amount">
                <p>+$${amountText.slice(
                  2,
                  -3
                )} <span class="suffix">${amountText.slice(-3)}</span></p>
            </div>
        </div>


        `;
    }
    const sumOfAll = sumArr.reduce((cur, each) => cur + Number(each), 0);
    totalConP = totalCon.querySelector("p").textContent = `$${sumOfAll}${
      activatedBtn === "2" ? "/yr" : "/mo"
    }`;
    console.log(totalConP, sumOfAll);

    stepFourContainer.insertAdjacentHTML("afterbegin", html);
  }
};

// const gotoNextPage = function () {
//   if (currentPage === lastpage - 2) {
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
  }

  if (curPage > 4) {
    console.log(nextBtn.textContent);
    const btnValuewithin = nextBtn.textContent;
    nextBtn.classList.add("btnOpacity");
    prevBtn.classList.add("btnOpacity");
    nextBtn.textContent = "Confirm";
    console.log(btnValuewithin);
  }
};
// console.log("current page", currentPage);

prevBtn.addEventListener("click", gotoPrevPage);
nextBtn.addEventListener("click", gotoNextPage);
