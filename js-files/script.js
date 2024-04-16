const slidesContainer = document.querySelector(".whole");
const allSlides = slidesContainer.querySelectorAll(".each-body");
const allIndicators = document.querySelectorAll(".activeBtn");

const btnsContainer = document.querySelector(".btn-container");
const prevBtn = btnsContainer.querySelector(".prev");
const nextBtn = btnsContainer.querySelector(".next");

const lastpage = allSlides.length;
let activatedBtn = "1";
let currentPage = 0;
const body = document.querySelector(".project-body");
const bgImage = document.querySelector(".background-art-work");
const allInputInStep1 = Array.from(
  document.querySelectorAll(".step-one-body input")
);
//all input in step one

//BAGROUND IMAGE
const observer = new ResizeObserver((enteries) => {
  // console.log(enteries);
  // console.log(enteries[0].contentRect.width);
  if (enteries[0].contentRect.width < 850) {
    bgImage.innerHTML = "";
    const html = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="375"
    height="172"
    viewBox="0 0 375 172"
    class="svg2"
  >
    <defs><path id="a" d="M0 0h375v172H0z" /></defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="b" fill="#fff"><use xlink:href="#a" /></mask>
      <use xlink:href="#a" fill="#483EFF" />
      <g mask="url(#b)">
        <g transform="translate(-151.029 -133.957)">
          <path
            fill="#6259FF"
            d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"
          />
          <ellipse
            cx="129.864"
            cy="258.711"
            fill="#FFAF7E"
            rx="96.329"
            ry="96.373"
          />
          <path
            fill="#F9818E"
            d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"
          />
          <g
            stroke="#FFF"
            stroke-linecap="round"
            stroke-linejoin="bevel"
            stroke-width="5"
          >
            <path
              d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
    `;
    bgImage.insertAdjacentHTML("afterbegin", html);
  } else {
    bgImage.innerHTML = "";
    const html = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="274"
    height="568"
    fill="none"
    viewBox="0 0 274 568"
    class="svg1"
  >
    <rect width="274" height="568" fill="#483EFF" rx="10" />
    <mask
      id="a"
      width="274"
      height="568"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style="mask-type: alpha"
    >
      <rect width="274" height="568" fill="#fff" rx="10" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#6259FF"
        fill-rule="evenodd"
        d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z"
        clip-rule="evenodd"
      />
      <path
        fill="#F9818E"
        fill-rule="evenodd"
        d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z"
        clip-rule="evenodd"
      />
      <path
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="bevel"
        stroke-width="5"
        d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"
      />
      <path
        fill="#FFAF7E"
        d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"
      />
    </g>
  </svg>
    `;
    bgImage.insertAdjacentHTML("afterbegin", html);
  }
});
observer.observe(body);

//step two variables
const step2MainContainer = document.querySelector(".step-two-body");
const step2Cards = step2MainContainer.querySelector(".cards");
const cardsNodelist = step2Cards.querySelectorAll(".card");

const totalCon = document.querySelector(".total-line");
let totalConP = (totalCon.querySelector("p").textContent = `$0`);
//Plans options
let myplan = {};

const selectedOption = function () {
  const allP = Array.from(document.querySelectorAll(".p1"));
  allP.forEach((each) => each.classList.remove("contrastP"));
  const picked = this;
  const contrastP = picked.querySelector(".p1");

  cardsNodelist.forEach((each) => each.classList.remove("selected-plan0"));
  contrastP.classList.add("contrastP");
  picked.classList.add("selected-plan0");
  myplan.selectedOption = picked;
};
cardsNodelist.forEach((each) => each.addEventListener("click", selectedOption));

//Plans Btns
const periodBtn = function (chk) {
  const btnMo = document.querySelector(".mo");
  const btnYr = document.querySelector(".yr");

  if (chk === "1") {
    btnMo.classList.add("period");
    btnYr.classList.remove("period");
  } else {
    btnMo.classList.remove("period");
    btnYr.classList.add("period");
  }
};
periodBtn(activatedBtn);

const switchContainer = step2MainContainer.querySelector(".switch");
const swicharr = switchContainer.querySelectorAll("span");

const selectedPlanBtns = function (e) {
  const clicked = e.target.closest("span");
  if (!clicked) return;
  swicharr.forEach((each) => each.classList.remove("selectedplanBtns"));

  clicked.classList.add("selectedplanBtns");
  myplan.selectedBtn00 = clicked;
  activatedBtn = clicked.dataset.val;
  periodBtn(activatedBtn);
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

//Slides function

function carousel() {
  // if (counter < slides.length - 1) {
  //   nextBtn.style.display = "block";
  // } else {
  //   nextBtn.style.display = "none";
  // }
  // if (counter > 0) {
  //   prevBtn.style.display = "block";
  // } else {
  //   prevBtn.style.display = "none";
  // }
  allSlides.forEach(function (slide) {
    slide.style.transform = `translateX(-${currentPage * 100}%)`;
  });
}
const directionFunction = function (index = 1) {
  //   const eachBodyWidth = allSlides[0].getBoundingClientRect().width;
  Array.from(allSlides).forEach((each, i) => {
    // each.style.transform = `translateX(${100 * (i - index)}%)`;
    each.style.left = `${i * 100}%`;
  });
};

directionFunction(0);
function focusfunc(e) {
  const active = e.target;
  active.classList.remove("error");
}
//onfocus function
allInputInStep1.forEach((each) => each.addEventListener("focus", focusfunc));

//Next Function
const gotoNextPage = function (e) {
  if (currentPage !== lastpage) {
    //if any of the input is empty
    const filterarr = allInputInStep1.filter((each) => each.value === "");
    filterarr.forEach((each) => {
      each.classList.add("error");
    });
    //fullname
    const nameVal = allInputInStep1[0].value;
    const text = nameVal.replaceAll(" ", "");

    const regExp = /[^a-zA-Z]/g;
    const textCheck = text.match(regExp);

    //Name condition
    if (allInputInStep1[0].value === "" || textCheck)
      allInputInStep1[0].classList.add("error");

    //email condition
    const last10Char = allInputInStep1[1].value.slice(-10);
    if (allInputInStep1[1].value === "" || last10Char !== "@gmail.com")
      allInputInStep1[1].classList.add("error");

    //phone number condition
    const num = allInputInStep1[2].value;
    const notANum = isNaN(+num);
    if (notANum || num.length < 11 || num.length > 15)
      allInputInStep1[2].classList.add("error");
    const anyisEmpty = allInputInStep1.some(
      (each) => each.value === "" || each.value === 0
    );

    if (
      num.length < 11 ||
      num.length > 15 ||
      anyisEmpty ||
      notANum ||
      textCheck
    )
      return;
    allInputInStep1.forEach((each) => each.classList.remove("error"));
    currentPage++;
    carousel();
    prevBtn.classList.remove("btnOpacity");
  }

  let sumArr = [];

  if (currentPage === 3) {
    const planDefaultOpt = document.querySelector(".plan0");
    const planDefaultBtn = document.querySelector(".o1");

    // const btnPl = myplan.selectedBtn00 || planDefaultBtn;
    const optPl = myplan.selectedOption || planDefaultOpt;

    const firstLineText = optPl.querySelector("h4").textContent;
    const firstLineAmtText = optPl.querySelector("p").textContent;

    stepFourContainer.innerHTML = "";
    sumArr.push(firstLineAmtText.slice(1, -3));
    let html = `
    <div class="first-line">
        <div class="left selected-plan">
            <p>${firstLineText}<span class="time">(${
      activatedBtn === "2" ? "Yearly" : "monthly"
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
    const checkboxNode = stepThreeContainer.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    const markedCheckbox = Array.from(checkboxNode);
    for (const box of markedCheckbox) {
      const itsparent = box.closest("label");
      const boldText = itsparent.querySelector(".bold").textContent;
      // const lightText = itsparent.querySelector(".light").textContent;
      const amountText = itsparent.querySelector(".right").textContent;

      sumArr.push(amountText.slice(2, -3));

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
    const totalDiv = totalCon.querySelector(".total");
    totalDiv.textContent = `total Per (${
      activatedBtn === "2" ? "Year" : "Month"
    })`;
    totalConP = totalCon.querySelector("p").textContent = `$${sumOfAll}${
      activatedBtn === "2" ? "/yr" : "/mo"
    }`;

    stepFourContainer.insertAdjacentHTML("afterbegin", html);

    const changeLink = document.querySelector(".change-plan");
    changeLink.addEventListener("click", () => {
      currentPage = 1;
      nextBtn.textContent = "Next Step";
      // directionFunction();
      carousel();
      activateIndicator(currentPage);
    });
  }

  activateIndicator(currentPage);
  directionFunction(currentPage);
};

const gotoPrevPage = function () {
  if (currentPage === 0) return;
  else {
    currentPage--;
    carousel();
    prevBtn.classList.remove("btnOpacity");
  }

  activateIndicator(currentPage);
  directionFunction(currentPage);
};

const activateIndicator = function (page) {
  const curPage = page + 1;
  for (const each of allIndicators) {
    each.classList.remove("indicator");
  }
  allIndicators.forEach((each) => {
    if (+each.textContent !== curPage) return;
    each.classList.add("indicator");
  });

  // if (curPage == 1) {
  if (curPage === 1) {
    prevBtn.classList.add("btnOpacity");
  }
  if (curPage > 3) {
    nextBtn.textContent = "Confirm";
  } else {
    nextBtn.textContent = "Next Step";
  }
  if (curPage > 4) {
    const btnValuewithin = nextBtn.textContent;
    nextBtn.classList.add("btnOpacity");
    prevBtn.classList.add("btnOpacity");
  }
};

prevBtn.addEventListener("click", gotoPrevPage);
nextBtn.addEventListener("click", gotoNextPage);
